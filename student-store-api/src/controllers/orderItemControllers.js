const prisma = require("../db/db");
// for a specific order Item we can search by its specific ID
exports.getOrderItemById = async (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const orderItem = await prisma.OrderItem.findUnique({ where: { id } });
  if (!orderItem) return res.staus(404).json({ error: "not found" });
  res.json(orderItem);
};
exports.createOrderItem = async (req, res) => {
  const { orderId, productId, price, quantity } = req.body;
  if (!orderId) return res.status(204).json({ error: "not available" });
  //   ! need to finish implementation for creating order
  // *  need to make it that you can add to the quantity and not a whole new item if already inside
  const newOrderItem = await prisma.OrderItem.create({
    data: { orderId, productId, price, quantity },
  });
  res.status(201).json(newOrderItem);
};
exports.deleteItem = async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.OrderItem.delete({ where: { id } });
  res.status(204).end();
};
