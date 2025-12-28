const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares/isLoggedIn");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/profile", (req, res) => {
  res.send(`Welcome, ${req.user.email}`);
});

router.get("/protected", isLoggedIn, (req, res) => {
  res.send("This is a protected route.");
});

module.exports = router;
