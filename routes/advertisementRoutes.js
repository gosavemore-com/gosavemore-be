const express = require("express");
const router = express.Router();
const {
  fetchAdvertisement,
} = require("../controllers/advertisementController");

router.route("/").get(fetchAdvertisement);

module.exports = router;
