const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());

const LoginModel = require("../models/Login");
const { Router } = require("express");
router.get('/', async (req, res) => {
    res.json({message: "Login is here!"})
})
router.post("/", async (req, res) => {
  const login = new LoginModel({
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const saveLogin = await login.save();
    res.json(saveLogin);
  } catch (err) {
    res.json({ message: err.message });
  }
});
module.exports = router
