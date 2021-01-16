const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const {
  fetchProducts,
  fetchProductId,
} = require("../controllers/productController");

router.route("/").get(fetchProducts);
router.route("/:id").get(fetchProductId);

module.exports = router;
