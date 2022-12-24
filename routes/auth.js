const express = require("express");
const router = express.Router();
const cors = require("cors");

router.use(cors());

const LoginModel = require("../models/Login");
const SignUpModel = require("../models/SignUp");

router.get("/getuser", async (req, res) => {
  try {
    const login = await LoginModel.find();
    res.json(login);
  } catch (err) {
    res.json({ msg: "get user failed!" });
  }
});
router.post("/login", async (req, res) => {
  try {
    const loginData = await LoginModel.find();
    if (
      loginData.email === req.body.email &&
      loginData.password === req.body.password
    ) {
      res.json({msg: "Logged in successfully"})
    }
  } catch (err) {
    res.json({ msg: "Login failed...!" });
  }
});
router.post("/signup", async (req, res) => {
  const signUp = new SignUpModel({
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const saveLogin = await signUp.save();
    res.json(saveLogin);
  } catch (err) {
    res.json({ msg: err.message });
  }
});
module.exports = router;
