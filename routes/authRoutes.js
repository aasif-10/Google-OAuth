const express = require("express");
const router = express.Router();
const passport = require("passport");
const authController = require("../controllers/authControllers");

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/profile");
  }
);

router.get("/logout", authController.logout);

module.exports = router;
