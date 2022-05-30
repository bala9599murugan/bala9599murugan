const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("This is router page");
});

module.exports = router;
