const asyncHandler = require("express-async-handler");
const Advertisement = require("../models/advertisementModel");

// @desc Fetch all advertisement product
// @route GET /api/advertisement/
// @access public
const fetchAdvertisement = asyncHandler(async (req, res) => {
  const advertisements = await Advertisement.find();
  res.json(advertisements);
});

module.exports = {
  fetchAdvertisement,
};
