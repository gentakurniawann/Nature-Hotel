const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// import multer
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// import model
const models = require("../models/index");
const tipe_kamar = models.tipe_kamar;

//config storage image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./image/tipe_kamar");
  },
  filename: (req, file, cb) => {
    cb(null, "img-" + Date.now() + path.extname(file.originalname));
  },
});
let upload = multer({ storage: storage });

//import auth
const auth = require("../auth");
app.use(auth);

// get tipe_kamar
app.get("/", auth, (req, res) => {
  tipe_kamar
    .findAll()
    .then((tipe_kamar) => {
      res.json({
        count: tipe_kamar.length,
        tipe_kamar: tipe_kamar,
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

//get tipe_kamar by id
app.get("/:id_tipe_kamar", auth, (req, res) => {
  tipe_kamar
    .findOne({ where: { id_tipe_kamar: req.params.id_tipe_kamar } })
    .then((result) => {
      res.json({
        tipe_kamar: result,
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

//post tipe_kamar
app.post("/", upload.single("foto"), auth, (req, res) => {
  if (!req.file) {
    res.json({
      message: "No uploaded file",
    });
  } else {
    let data = {
      nama_tipe_kamar: req.body.nama_tipe_kamar,
      harga: req.body.harga,
      deskripsi: req.body.deskripsi,
      foto: req.file.filename,
    };
    tipe_kamar
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
  }
});

//update tipe_kamar
app.put("/:id", upload.single("foto"), auth, (req, res) => {
  let param = { id_tipe_kamar: req.params.id };
  let data = {
    nama_tipe_kamar: req.body.nama_tipe_kamar,
    harga: req.body.harga,
    deskripsi: req.body.deskripsi,
  };
  if (req.file) {
    // get data by id
    const row = tipe_kamar
      .findOne({ where: param })
      .then((result) => {
        let oldFileName = result.foto;

        // delete old file
        let dir = path.join(__dirname, "../image/tipe_kamar", oldFileName);
        fs.unlink(dir, (err) => console.log(err));
      })
      .catch((error) => {
        console.log(error.message);
      });

    // set new filename
    data.foto = req.file.filename;
  }
  tipe_kamar
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

//delete tipe_kamar
app.delete("/:id", auth, async (req, res) => {
  try {
    let param = { id_tipe_kamar: req.params.id };
    let result = await tipe_kamar.findOne({ where: param });
    let oldFileName = result.foto;

    // delete old file
    let dir = path.join(__dirname, "../image/tipe_kamar", oldFileName);
    fs.unlink(dir, (err) => console.log(err));

    // delete data
    tipe_kamar
      .destroy({ where: param })
      .then((result) => {
        res.json({
          message: "data has been deleted",
        });
      })
      .catch((error) => {
        res.json({
          message: error.message,
        });
      });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

module.exports = app;
