const asyncHandler = require("express-async-handler");
const Cart = require("../models/cartModel.js");
const User = require("../models/userModel.js");

// @desc create cart
// @route POST /api/cart
// @access Private
const addCart = asyncHandler(async (req, res) => {
  const { email, product } = req.body;
  console.log(email, product);

  //   const user = await User.find({ email });

  //   const cart = await Cart.updateOne(
  //     {
  //       user: user[0]._id,
  //     },
  //     {
  //       $push: {
  //         products: {
  //           product: product,
  //         },
  //       },
  //     }
  //   );

  //   res.status(201).json(cart);
});

const fetchCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne();

  res.status(200).json(cart);
});

module.exports = { addCart, fetchCart };
