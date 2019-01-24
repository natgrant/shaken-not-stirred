const express = require("express");

const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/list", (req, res) => {
  db.getIngredients()
    .then(ingredients => {
      console.log(ingredients)
      res.render('drinksList', { ingredients, layout: 'show' })
    })
    .catch(err => {
      res.status(500).send("DATABASE ERROR: " + err.message);
    })
})

//TODO: result route
router.post("/list/result", (req, res) => {
  let item = req.body
  console.log(item)

  res.render("drinksList", { layout: "show" })
})


module.exports = router;
