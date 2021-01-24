const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// @desc Fetch all product
// @route GET /api/products/
// @access public
const fetchProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// @desc Fetch single product
// @route GET /api/products/:id
// @access public
const fetchProductId = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc Fetch all product featured
// @route GET /api/products/featured
// @access public
const fetchProductsFeatured = asyncHandler(async (req, res) => {
  const products = await Product.find({ featured: true });
  res.json(products);
});

// @desc Fetch categories products
// @route GET /api/products/categories/:category
// @access public
const fetchProductsCategory = asyncHandler(async (req, res) => {
  const { category } = req.params;

  // refactor category for right formatting on database
  let newCategory = category.replace(/-/g, " ").split(" ");

  if (newCategory.length > 0) {
    newCategory = newCategory.map(
      (item) => item[0].toUpperCase() + item.substr(1)
    );
    newCategory = newCategory.join(" ");
  } else {
    newCategory = newCategory[0];
  }

  const product = await Product.find({ category: newCategory });

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

module.exports = {
  fetchProducts,
  fetchProductId,
  fetchProductsFeatured,
  fetchProductsCategory,
};
