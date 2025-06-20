const prisma = require("../db/db");

//GET ALL ROUTE
exports.getALL = async (req, res) => {
  let items = await prisma.Product.findMany(); // !  grab all items
  const { name, description, price, category } = req.query;

  // potential search queries
  if (name) {
    items = items.filter((i) =>
      i.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  if (description) {
    items = items.filter((i) =>
      i.description.toLowerCase().includes(description.toLowerCase())
    );
  }
  if (price) {
    items = items.filter((i) => i.price == price);
  }
  if (category) {
    items = items.filter((i) =>
      i.category.toLowerCase().includes(category.toLowerCase())
    );
  }
  // potential queries done

  res.json(items);
};
// get specific route
exports.getById = async (req, res) => {
  const id = parseInt(req.params.id); // get id as a number from params
  const item = await prisma.Product.findUnique({ where: { id } });
  if (!item) return res.status(404).json({ error: "not found" });
  res.json(item);
};
// create a new post route
exports.create = async (req, res) => {
  const { name, description, price, image_url, category } = req.body;
  const newItem = await prisma.Product.create({
    data: { name, description, price, image_url, category },
  });
  res.status(201).json(newItem);
};
// update specific put route
exports.update = async (req, res) => {
  const id = parseInt(req.params.id); // get id as a number from params
  const { name, description, price, image_url, category } = req.body;
  const item = await prisma.Product.update({
    where: { id },
    data: { name, description, price, image_url, category },
  });
  res.json(item);
};
// delete specific route
exports.remove = async (req, res) => {
  const id = Number(req.params.id); // get id as a number from params
  await prisma.Product.delete({ where: { id } });
  res.status(204).end();
};
