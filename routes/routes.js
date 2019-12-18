const express = require("express");
const orm = require("../config/orm");

const router = express.Router();

router.get("/", (req, res) => {
  orm.all("burgers", results => {
    let data = {
      burgers: results
    };

    res.render("index", data);
  });
});

router.post("/api/burgers", (req, res) => {
  orm.create("burgers", "burger", `${req.body.name}`, result => {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  let condition = req.params.id;

  orm.update("burgers", "devoured", req.body.devoured, condition, result => {
    res.status(200).end();
  });
});

module.exports = router;
