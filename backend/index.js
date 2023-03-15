const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const user = require("./routes/user");
app.use("/user", user);

//endpoint customer
const customer = require("./routes/customer");
app.use("/customer", customer);

//endpoint tipe_kamar
const tipe_kamar = require("./routes/tipe_kamar");
app.use("/tipe_kamar", tipe_kamar);

//endpoint kamar
const kamar = require("./routes/kamar");
app.use("/kamar", kamar);

//endpoint pemesanan
const pemesanan = require("./routes/pemesanan");
app.use("/pemesanan", pemesanan);

//endpoint detail pemesanan
const detail_pemesanan = require("./routes/detail_pemesanan");
app.use("/detail_pemesanan", detail_pemesanan);

app.listen(2604, () => {
  console.log("server run on port 2604");
});

app.use(express.static(__dirname));
