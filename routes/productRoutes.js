const express = require("express");
const router = express.Router();
const {
  fetchProducts,
  fetchProductId,
  fetchProductsFeatured,
  fetchProductsCategory,
} = require("../controllers/productController");

router.route("/").get(fetchProducts);
router.route("/featured").get(fetchProductsFeatured);
router.route("/:id").get(fetchProductId);
router.route("/categories/:category").get(fetchProductsCategory);

module.exports = router;
