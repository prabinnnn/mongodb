const router = require("express").Router();
const bookrouter = require("../module/book-app/book.route");

router.use("/api/v1/book", bookrouter);
module.export = router;
