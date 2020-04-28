var express = require("express");

var router = express.Router();

// input connection puppies database connection object
var puppy = require("../models/puppy.js");

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log(new Date().toLocaleDateString('en-US'))
  next();
})

// create all routes useing express router method
// get routes
router.get("/", function (req, res) {
  console.log("you made it - in.");
  puppy.all(function (data) {
    var hbsObject = {
      puppy: data
    }
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// insert a new puppie
router.post("/api/puppies", function (req, res) {
  console.log(req.body);
  puppy.create(
    ["p_name", "adopted"], [
    req.body.name, req.body.adopted
  ], function (results) {
    res.json({ id: results.insertId });
  });
});

router.put("api/puppies/:id", function(req,res){
  var condition = "id= " + req.params.id;
  console.log("condition", condition);
  puppy.update({
    adopted: req.body.adopted
  }, condition, function(result){
    if (result.changedRows == 0){
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
// puppy.update


router.put
module.exports = router;
