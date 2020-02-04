const express = require("express");
const router = express.Router();
const db = require("../models")
console.log(db.Burger);

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  db.Burger.findAll().then(function (data) {
    console.log(data);
    const result = []
    for (let i = 0; i < data.length; i++) {
      result.push(data[i].dataValues)
    }
    let final = {
      burgers: result
    }
    res.render("index", final);
  });
});

// Create burgers
router.post("/api/burgers", function (req, res) {
  db.Burger.create({
    name: req.body.name,
    eaten: req.body.eaten
  }).then(function (result) {
    res.end()
  });
});

// Update burger status from ready to eaten
router.put("/api/burgers/:id", function (req, res) {
  db.Burger.update({
    eaten: req.body.eaten
  }, {
    where: {
      id: req.params.id
    }
  }).then(function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  }).catch(function (err) {
    console.log(err);
  });
});

// Delete burger
router.delete("/api/burgers/:id", function (req, res) {
  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;