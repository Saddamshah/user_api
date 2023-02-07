const express = require("express");
const router = express.Router();
const { check } = require("express-validator")
const { addUser, getUser, deleteUser } = require("../Controller/index")


router.post('/users', [
    check("name").exists().withMessage("Name should not empty"),
    check("email").isEmail().withMessage("Please provide the valid email id"),
    check("email").exists().withMessage("DOB should not empty"),
], addUser)
router.get('/users/:id', getUser)
router.delete('/users/:id', deleteUser)


module.exports = router
