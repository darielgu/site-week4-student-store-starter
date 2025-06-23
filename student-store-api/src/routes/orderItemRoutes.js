const express = require("express");
const router = express.Router();
const controller = require("../controllers/orderItemControllers");

router.get("/:id", controller.getOrderItemById);
router.post("/", controller.createOrderItem);
router.delete("/:id", controller.deleteItem);
module.exports = router;
