const { fetchAllUsers } = require('../controllers/userController');

const router = require('express').Router();

router.get("/fetchallusers", fetchAllUsers);

module.exports = router;