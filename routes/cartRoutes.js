const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const { addCart, fetchCart } = require("../controllers/cartController");

router.route("/").post(protect, addCart).get(fetchCart);

module.exports = router;
