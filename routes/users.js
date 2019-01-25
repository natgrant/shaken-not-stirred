const express = require("express");

const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/list", (req, res) => {
  db.getIngredients()
    .then(ingredients => {
      res.render('drinksList', { ingredients, layout: 'show' })
    })
    .catch(err => {
      res.status(500).send("DATABASE ERROR: " + err.message);
    })
})

router.get("/result", (req, res) => {
  res.render("drinkResult", { layout: 'show' })
})

//TODO: result route
router.post("/list", (req, res) => {
  let item = req.body.value
  console.log(item)
  db.submitIngredients(item)
    .then(() => {
      res.redirect('/result')
    })
})



module.exports = router;
