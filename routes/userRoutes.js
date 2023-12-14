const { userCreate, loginUser } = require('../controllers/userController');

const router = require('express').Router();

router.route("/signup").post(userCreate);
router.route("/login").post(loginUser);

module.exports = router;