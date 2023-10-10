const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("sample.ejs");
});
router.get("/home", (req, res) => {
  res.send("hihi");
});

module.exports = router;
