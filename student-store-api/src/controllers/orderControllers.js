const prisma = require("../db/db");

// get all orders
exports.getALL = async (req, res) => {
  const orders = await prisma.Order.findMany(); // !  grab all items
  res.json(orders);
};
exports.getById = async (req, res) => {
  let id = parseInt(req.params.id);
  const order = await prisma.Order.findUnique({ where: { id } });
  if (!order) return res.status(404).json({ error: "not found" });
  res.json(order);
};
exports.create = async (req, res) => {
  const { customer, total, status } = req.body;
  const newOrder = await prisma.Order.create({
    data: { customer, total, status },
  });
  res.status(201).json(newItem);
};
exports.update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { customer, total, status } = req.body;
  const order = await prisma.Order.update({
    where: { id },
    data: { customer, total, status },
  });
  res.json();
};
exports.remove = async (req, res) => {
  const id = Number(req.params.id);
  await prisma.Order.delete({ where: { id } });
  res.status(204).end();
};

exports.getItems = async (req, res) => {
  const id = Number(req.params.id);
  const orderCart = await prisma.Order.findUnique({
    where: { id },
    include: { orderItems: true },
  });
  cartItems = orderCart.orderItems;
  console.log(cartItems);
  res.status(201).json(cartItems);
};
exports.total = async (req, res) => {
  const id = Number(req.params.id);
  const orderCart = await prisma.Order.findUnique({
    where: { id },
    include: { orderItems: true },
  });
  cartItems = orderCart.orderItems;
  let cartTotal = 0;
  cartItems.map((item, index) => {
    cartTotal += parseFloat(item.price) * item.quantity;
  });
  res.status(201).json(cartTotal);
};
exports.addCartItem = async (req, res) => {
  const orderId = Number(req.params.id);
  let { productId, price, quantity } = req.body;

  if (!orderId) return res.status(204).json({ error: "not available" });
  // * going to make it that before we do this query we look for the item and see if it is already inside of the cart and add on our newly grabbed quantity to it
  // if the orderId & productId are already in DB update
  const itemInCart = await prisma.orderItem.findFirst({
    where: {
      orderId: {
        equals: orderId,
      },
      productId: {
        equals: productId,
      },
    },
  });
  if (itemInCart) {
    let id = itemInCart.id;
    let extractedOldQuantity = itemInCart.quantity;
    quantity += extractedOldQuantity;
    console.log(quantity);
    const updatedItem = await prisma.OrderItem.update({
      where: { id: id },
      data: { quantity },
    });

    res.status(201).json(updatedItem);
  } else {
    // create newOrderItem
    const newOrderItem = await prisma.OrderItem.create({
      data: { orderId, productId, price, quantity },
    });
    res.status(201).json(newOrderItem);
  }
};
