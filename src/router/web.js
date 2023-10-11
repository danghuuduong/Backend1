const express = require("express");
const { getHomepage } = require("../controllers/home.controller");
const router = express.Router();

router.get("/", getHomepage);
router.get("/about", (req, res) => {
  res.send("hihi");
});

module.exports = router;
