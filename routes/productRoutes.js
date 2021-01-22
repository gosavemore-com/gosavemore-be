const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const {
  fetchProducts,
  fetchProductId,
  fetchProductsFeatured,
} = require("../controllers/productController");

router.route("/").get(fetchProducts);
router.route("/:id").get(fetchProductId);
router.route("/featured").get(fetchProductsFeatured);
router.route("/categories/:category").get(fetchProducts);

module.exports = router;
