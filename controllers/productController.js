const express = require("express");
const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// @desc Fetch all product
// @route GET /api/products/featured
// @access public
const fetchProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// @desc Fetch all product
// @route GET /api/products/featured
// @access public
const fetchProductsFeatured = asyncHandler(async (req, res) => {
  const products = await Product.find({ featured: true });
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

// @desc Fetch categories products
// @route GET /api/products/categories/:category
// @access public
const fetchProductsCategory = asyncHandler(async (req, res) => {
  const { category } = req.params;
  const product = await Product.findById(category);

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
