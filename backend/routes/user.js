const express = require("express");
const bodyParser = require("body-parser");
const md5 = require("md5");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// import multer
const multer = require("multer");
const path = require("path");
const fs = require("fs");

//config storage image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./image/user");
  },
  filename: (req, file, cb) => {
    cb(null, "img-" + Date.now() + path.extname(file.originalname));
  },
});
let upload = multer({ storage: storage });

const models = require("../models/index");
const user = models.user;

// get user by role
app.get("/find/:role", (req, res) => {
  user
    .findOne({ where: { role: req.params.role } })
    .then((result) => {
      res.json({
        user: result,
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

//import auth
const auth = require("../auth");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "login";

// endpoint login user (authentication), METHOD: POST, function: findOne
app.post("/auth", async (req, res) => {
  let data = {
    email: req.body.email,
    password: md5(req.body.password),
  };
  // cari data admin yang username dan passwordnya sama dengan input
  let result = await user.findOne({ where: data });
  // ditemukan
  if (result) {
    // set payload from data
    let payload = JSON.stringify(result);
    // generate token based on payload and secret_key
    let token = jwt.sign(payload, SECRET_KEY);
    res.json({
      logged: true,
      data: result,
      token: token,
    });
  }
  // tidak ditemukan
  else {
    res.json({
      logged: false,
      message: "Invalid email or password",
    });
  }
});

//post user
app.post("/", upload.single("foto"), (req, res) => {
  if (!req.file) {
    res.json({
      message: "No uploaded file",
    });
  } else {
    let data = {
      nama_user: req.body.nama_user,
      foto: req.file.filename,
      email: req.body.email,
      password: md5(req.body.password),
      role: req.body.role,
    };
    user
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

// endpoint untuk menampilkan semua data user
app.get("/", auth, (req, res) => {
  user
    .findAll()
    .then((result) => {
      res.json({
        count: result.length,
        user: result,
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

app.get("/:id_user", auth, (req, res) => {
  user
    .findOne({ where: { id_user: req.params.id_user } })
    .then((result) => {
      res.json({
        user: result,
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
});

//update customer
app.put("/:id", upload.single("foto"), auth, (req, res) => {
  let param = { id_user: req.params.id };
  let data = {
    nama_user: req.body.nama_user,
    email: req.body.email,
    role: req.body.role,
  };
  if (req.file) {
    // get data by id
    const row = user
      .findOne({ where: param })
      .then((result) => {
        let oldFileName = result.foto;

        // delete old file
        let dir = path.join(__dirname, "../image/user", oldFileName);
        fs.unlink(dir, (err) => console.log(err));
      })
      .catch((error) => {
        console.log(error.message);
      });

    // set new filename
    data.foto = req.file.filename;
  }

  if (req.body.password) {
    data.password = md5(req.body.password);
  }

  user
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

//delete customer
app.delete("/:id", async (req, res) => {
  try {
    let param = { id_user: req.params.id };
    let result = await user.findOne({ where: param });
    let oldFileName = result.foto;

    // delete old file
    let dir = path.join(__dirname, "../image/user", oldFileName);
    fs.unlink(dir, (err) => console.log(err));

    // delete data
    user
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
