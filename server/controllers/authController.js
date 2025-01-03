const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");

const signup = async (req, res) => {
  try {
    //get details from client side
    const { name, email, password, phone } = req.body;
    //check if user already exists
    const user = await UserModel.findOne({ $or: [{ email }, { phone }] });
    // if user exists return error or login
    if (user) {
      if (user.email === email) {
        return res.status(409).json({
          message: "Email already exists, Please login instead",
          success: false,
        });
      }
      if (user.phone === phone) {
        return res.status(409).json({
          message: "Phone number already exists, Please login instead",
          success: false,
        });
      }
    }
    //if user doesn't exist save it on the database
    const userModel = new UserModel({ name, email, password, phone });
    userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();
    res.status(201).json({ message: "signup successfull", success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
//login Controller
const login = async (req, res) => {
  try {
    // get authentication details from client side
    const { email, password } = req.body;
    //check if user exists
    const user = await UserModel.findOne({ email });

    const errorMsg = "Authentication Failed! Invalid email or password...";
    // if email not found
    if (!user) {
      return res.status(401).json({ message: errorMsg, success: false });
    }
    const isPassEqual = await bcrypt.compare(password, user.password);
    // if email found but password does not match
    if (!isPassEqual) {
      return res.status(401).json({ message: errorMsg, success: false });
    }
    // jwt
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login Success",
      success: true,
      jwtToken,
      email,
      name: user.name,
    });
  } catch (error) {
    res.json({ message: "Internal server error", success: false });
  }
};

module.exports = { signup, login };
