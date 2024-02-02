const bookmodel = require("./book.model");
const create = (payload) => {
  return bookmodel.create(payload);
};
const get = () => {
  return bookmodel.find();
};
const getById = (Id) => {
  return bookmodel.findOne(Id);
};
const updateByid = (Id, payload) => {
  return bookmodel.updateOne(Id, payload);
};
const remove = (Id) => {
  return bookmodel.deleteone(Id);
};
module.exports = { create, get, getById, updateByid, remove };
