require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = Number(process.env.PORT);
const indexRouter = require("./routes");
app.use("/", indexRouter);
mongoose.connect(process.env.DB).then(() => console.log("Connected!"));
app.use(express.json());
app.use((err, req, res, next) => {
  err = err ? err.toString() : "something missing";
  res.status(500).json({ msg: err });
});
app.listen(PORT, () => {
  console.log(`app is running is ${PORT}`);
});
