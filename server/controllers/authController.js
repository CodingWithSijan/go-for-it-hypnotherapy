const bcrypt = require("bcryptjs");
const user = require("../Model/userModel");
const multer = require("multer");
const path = require("path");

//setup multer storage with a custom filename
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); //directory to store uploaded files
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname); //get the file extension
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`); //rename the file
  },
});

const upload = multer({ storage: storage });

//User registration Controller endpoint = 'api/v1/auth/registration'
const registrationController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const file = req.file;
    //check if email aldready exists
    const userExist = await user.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }
    //hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    /***
     * Insert User to Database
     */
    const newUser = await user.create({
      username,
      email,
      password: hashedPassword,
      filePath: file.path,
    });
    res.status(201).json({ msg: "User created successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registrationController, upload };
