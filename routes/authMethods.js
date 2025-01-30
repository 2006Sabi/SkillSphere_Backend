const express = require("express");
const {
  register,
  login,
  getUserProfile,
  updateUserProfile,
  submitFeedback,
  getAllFeedback,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

// User Authentication & Profile Routes
router.post("/register", register);
router.post("/login", login);
router.get("/profile", getUserProfile);
router.put("/profile", updateUserProfile); // Update profile

// Feedback Routes
router.post("/feedback", submitFeedback);
router.get("/feedback", getAllFeedback); // Admin can get all feedback

// Admin Routes
router.delete("/user/:id", deleteUser); // Delete user by ID

module.exports = router;
