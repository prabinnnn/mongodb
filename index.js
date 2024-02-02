require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = Number(process.env.PORT);
const indexofrouter = require("./routes");
app.use("/", indexofrouter);
mongoose.connect(process.env.DB).then(() => console.log("Connected!"));
app.use(express.json());
app.listen(PORT, () => {
  console.log("app is running");
});
