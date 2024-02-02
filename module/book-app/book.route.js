const bookcontroller = require("./book.controller");
const router = require("express").Router();
router.get("/", (res, req, next) => {
  try {
    result = bookcontroller.get(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.post("/", (res, req, next) => {
  try {
    result = bookcontroller.create(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.put("/:id", (res, req, next) => {
  try {
    id = req.params.Id;
    data = req.body;
    result = bookcontroller.updateByid(id, data);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.patch("/:id", (res, req, next) => {
  try {
    id = req.params.Id;
    data = req.body;
    result = bookcontroller.updateByid(id, data);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", (res, req, next) => {
  try {
    id = req.params.Id;
    data = req.body;
    result = bookcontroller.remove(id, data);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
