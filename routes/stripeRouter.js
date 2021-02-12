const express = require("express");
const router = express.Router();
const {
  paymentOrder,
  checkoutOrder,
} = require("../controllers/stripeController");

router.route("/payment").post(paymentOrder);
router.route("/checkout").post(checkoutOrder);

module.exports = router;
