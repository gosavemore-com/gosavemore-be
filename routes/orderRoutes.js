const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");

const {
  addOrderItems,
  getOrders,
  getOrderById,
} = require("../controllers/orderController.js");

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
// router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
// router.route("/:id/pay").put(protect, updateOrderToPaid);
// router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

module.exports = router;
