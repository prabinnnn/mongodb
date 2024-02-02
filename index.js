require("dotenv").config();
const express = require("express");
const app = express();
const port = Number(process.env.PORT);
const indexofrouter = require("");
app.use("/", indexofrouter);
app.use(express.json());
mongoose.connect(process.env.DB).then(() => console.log("Connected!"));
app.listen(PORT, () => {
  console.log("app is running");
});
