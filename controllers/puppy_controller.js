var express = require("express");

var router = express.Router();

// input connection puppies database connection object
var puppy = require("../models/puppy.js");

// create all routes useing express router method
// get routes
router.get("/", function (req, res) {
  console.log("you made it - /");
  puppy.all(function (data) {
    var hbsObject = {
      puppy: data
    }
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// insert a new puppie
router.post("/api/puppies", function (req, res) {
  puppy.create(
    ["p_name", "adopted"], [
    req.body.name, req.body.adopted
  ], function (results) {
    res.json({ id: results.insertId });
  });
});

router.put("/api/puppies/:id", function(req,res){
  var condition = "id= " + req.params.id;

  console.log("you made it - /api.puppies/:id");
  console.log("condition " + condition);

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

router.delete("/api/puppies/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  puppy.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
