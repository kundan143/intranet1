var express = require("express");
var router = express.Router();
const {
  fetch_data,
  save_data,
  edit_data} = require("../../controller/feedback");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

// for fetch data
router.get("/fetch/:name", fetch_data);


//save data
router.post("/save", save_data);

//edit data
router.post("/edit", edit_data);

module.exports = router;
