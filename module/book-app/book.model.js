const { Schema, model } = require("mangoose");
const bookSchema = Schema({
  title: { type: String, required: true },
});
module.exports = model("book", bookSchema);
