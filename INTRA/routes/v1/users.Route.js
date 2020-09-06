var express = require('express');
var router = express.Router();
const searchData = require("../../controller/usersearch");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//search data by id, name, email
router.get("/user/:name", searchData)
module.exports = router;
