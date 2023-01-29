const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// import model
const models = require("../models/index");
const kamar = models.kamar;

//import auth
const auth = require("../auth");
app.use(auth);

// get all data kamar
app.get("/", auth, (req, res) => {
  kamar
    .findAll()
    .then((result) => {
      res.json({
        count: result.length,
        kamar: result,
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

//get kamar by id
app.get("/:id_kamar", auth, (req, res) => {
  kamar
    .findOne({ where: { id_kamar: req.params.id_kamar } })
    .then((result) => {
      res.json({
        kamar: result,
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

//post data kamar
app.post("/", auth, (req, res) => {
  let data = {
    id_tipe_kamar: req.body.id_tipe_kamar,
    nomor_kamar: req.body.nomor_kamar,
  };
  kamar
    .create(data)
    .then((result) => {
      res.json({
        message: "data has been inserted",
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

//update data kamar
app.put("/:id", auth, (req, res) => {
  let param = {
    id_kamar: req.params.id,
  };
  let data = {
    id_tipe_kamar: req.body.id_tipe_kamar,
    nomor_kamar: req.body.nomor_kamar,
  };
  kamar
    .update(data, { where: param })
    .then((result) => {
      res.json({
        message: "data has been updated",
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

//delete data kamar
app.delete("/:id", auth, async (req, res) => {
  let param = {
    id_kamar: req.params.id,
  };
  kamar
    .destroy({ where: param })
    .then((result) => {
      res.json({
        massege: "data has been deleted",
      });
    })
    .catch((error) => {
      res.json({
        message: "error.message",
      });
    });
});

module.exports = app;
