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
