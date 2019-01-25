const express = require("express");

const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  const name = "Nat";
  const fav = "tequila";
  fave = {
    name: "Nat",
    favourite: "things"
  };
  // db.addDrink(id, drinkName).then(data => console.log(data))
  db.saveFav(fave).then(ingredient => {
    // result = "";
    // ingredient == 1 ? (result = "success") : (result = "fail");
    console.log(ingredient);
    // console.log(result);

    res.render("home");
  });
});

router.get("/stuff", (req, res) => {
  db.getIngredients()
    .then(ingredients => {
      res.render("drinksList", { ingredients, layout: "show" });
    })
    .catch(err => {
      res.status(500).send("DATABASE ERROR: " + err.message);
    });
});

router.post("/stuff", (req, res) => {
  console.log(req.body);
  db.saveFav(req.body)
    .then(ingredients => {
      res.render("drinksList", { ingredients, layout: "show" });
    })
    .catch(err => {
      res.status(500).send("DATABASE ERROR: " + err.message);
    });
});

router.get("/list", (req, res) => {
  db.getIngredients()
    .then(ingredients => {
      res.render("drinksList", { ingredients, layout: "show" });
    })
    .catch(err => {
      res.status(500).send("DATABASE ERROR: " + err.message);
    });
});

router.get("/result", (req, res) => {
  res.render("drinkResult", { layout: "show" });
});

//TODO: result route
router.post("/list", (req, res) => {
  let item = req.body;
  console.log(item);
  db.submitIngredients(item).then(() => {
    res.redirect("/result");
  });
});

//EXAMPLE
// router.get("/", (req, res) => {
//   const id = 2;
//   const name = "tasty drink";
//   // db.addDrink(id, drinkName).then(data => console.log(data))
//   db.deleteItem(id).then(ingredient => {
//     result = "";
//     ingredient == 1 ? (result = "success") : (result = "fail");
//     console.log(ingredient);
//     console.log(result);

//     res.render("home");
//   });
// });

module.exports = router;
