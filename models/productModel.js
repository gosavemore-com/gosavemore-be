const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
      text: true,
    },
    image: [String],
    brand: {
      type: String,
      required: true,
      text: true,
    },
    category: {
      type: String,
      required: true,
      text: true,
    },
    description: {
      type: String,
      required: true,
      text: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    itemNumber: {
      type: Number,
      required: true,
      default: 0,
    },
    netWeight: {
      type: Number,
      required: true,
      default: 0,
    },
    featured: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

productSchema.index({
  name: 1,
  description: 1,
  brand: 1,
  category: 1,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
