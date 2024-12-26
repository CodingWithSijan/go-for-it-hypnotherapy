const { signup, login } = require("../controllers/authController"); //Controller
const {
  signupValidation,
  loginValidation,
} = require("../middleware/authValidation"); //Middleware
const router = require("express").Router();

router.post("/login", loginValidation, login);

router.post("/signup", signupValidation, signup);

module.exports = router;
