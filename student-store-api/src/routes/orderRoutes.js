const express = require("express");
const router = express.Router();
const controller = require("../controllers/orderControllers");

router.get("/", controller.getALL);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.post("/:id", controller.update);
router.delete("/:id", controller.remove);
router.get("/items/:id", controller.getItems); // gets the items in a cart
router.get("/:id/total", controller.total); // ! works
router.post("/:id/items", controller.addCartItem); // ! should add new item
module.exports = router;
