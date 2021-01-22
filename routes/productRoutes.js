const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const {
  fetchProducts,
  fetchProductId,
} = require("../controllers/productController");

router.route("/featured").get(fetchProducts);
router.route("/:id").get(fetchProductId);

module.exports = router;
