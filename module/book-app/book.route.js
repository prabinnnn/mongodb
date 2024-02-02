const bookcontroller = require("./book.controller");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    result = await bookcontroller.get(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    result = await bookcontroller.create(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    id = req.params.id; // Corrected the parameter name
    data = req.body;
    result = await bookcontroller.updateByid(id, data);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    id = req.params.id; // Corrected the parameter name
    data = req.body;
    result = await bookcontroller.updateByid(id, data);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    id = req.params.id; // Corrected the parameter name
    data = req.body;
    result = await bookcontroller.remove(id, data);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
