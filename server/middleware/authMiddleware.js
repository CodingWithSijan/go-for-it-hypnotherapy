const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const protect = async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		try {
			token = req.headers.authorization.split(" ")[1];
			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			if (!decoded) {
				return res
					.status(401)
					.json({ message: "Not authorized, admin not found" });
			}

			next();
		} catch (error) {
			return res.status(401).json({ message: "Not authorized, token failed" });
		}
	}

	if (!token) {
		console.error("No token provided");
		return res.status(401).json({ message: "Not authorized, no token", token });
	}
};

module.exports = { protect };
