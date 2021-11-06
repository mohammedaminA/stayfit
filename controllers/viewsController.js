const User = require("../models/userModel");

exports.getLoginForm = (req, res) => {
  res.status(200).render("login", {
    title: "Login to your account",
  });
};
