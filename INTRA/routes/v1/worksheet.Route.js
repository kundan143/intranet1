var express = require("express");
var router = express.Router();

const {
  fetch_data,
  save_data,
  delete_data,
  fetch_data_for_employee,
  searchData,
  api4
} = require("../../controller/worksheet");

// fetch data from worksheet
router.get("/fetch", fetch_data);

// save data from worksheet
router.post("/save", save_data);

// delete data from worksheet
router.post("/removeuser", delete_data);

// fetch data for senior manager
router.get("/employee", fetch_data_for_employee);

// search data from  user table
//router.get("/user/:name", searchData);

//

module.exports = router;
