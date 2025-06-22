const express = require("express");
const router = express.Router();
const controller = require("../controllers/orderControllers");

router.get("/", controller.getALL);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.post("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;
