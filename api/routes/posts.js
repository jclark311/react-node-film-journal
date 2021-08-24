const router = require("express").Router();

router.post("/", async (req, res) => {

  res.status(200).json("It works!");

});

module.exports = router;
