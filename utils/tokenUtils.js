const jwt = require("jsonwebtoken");
require("dotenv").config(); // Load environment variables

const SECRET = process.env.JWT_SECRET;

if (!SECRET) {
  throw new Error("JWT_SECRET is not defined in .env file");
}

const generateToken = (user) => {
  return jwt.sign(
    { userId: user._id },  // Encode user ID in the token
    process.env.JWT_SECRET, // Secret key (stored securely in environment variables)
    { expiresIn: '1h' }     // Token expiration time (1 hour in this case)
  );
};
const verifyToken = (token) => {
  return jwt.verify(token, SECRET);
};

module.exports = { generateToken, verifyToken };
