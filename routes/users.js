const express = require("express");

const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/list", (req, res) => {
  res.render("drinksList", { layout: "show" })
})


// .catch(err => {
//   res.status(500).send("DATABASE ERROR: " + err.message);
// });


//TODO: drinks list route

//TODO: result route

//Edit route??

module.exports = router;
