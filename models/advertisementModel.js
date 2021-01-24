const mongoose = require("mongoose");

const advertisementSchema = mongoose.Schema({
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String },
});

const Advertisement = mongoose.model("advertisement", advertisementSchema);
module.exports = Advertisement;
