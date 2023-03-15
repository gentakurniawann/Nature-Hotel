const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//import model
const model = require("../models/index");
const detailBooking = model.detail_pemesanan;

const sequelize = require("sequelize");
// const moment = require("moment");

const Op = sequelize.Op;

app.get("/", async (req, res) => {
  try {
    const result = await detailBooking.findAll({
      include: ["pemesanan", "kamar"],
    });

    return res.status(200).json({
      message: "Succes to get all booking",
      count: result.length,
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal error",
      err: err,
    });
  }
});

module.exports = app;
