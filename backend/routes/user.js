const express = require("express");

const UserContoller = require("../controllers/user");

const router = express.Router();

router.post("/signup", UserContoller.createUser);

router.post("/login", UserContoller.userLogin);

module.exports = router;
