const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUsers,
} = require("../controllers/userController");
const { protect, admin } = require("../middleware/authMiddleware");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/").get(protect, admin, getUsers);

module.exports = router;
