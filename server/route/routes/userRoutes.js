const express = require('express');
const router = express.Router();
const controllers = require("../../controller/index");

router.post("/user",controllers.userControllers.addUser);

module.exports = router;