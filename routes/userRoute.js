const express = require("express");
const router = express.Router();

const { getAllusers } = require("../controller/userController");

router.get("/", getAllusers);

module.exports = router;
