// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var puppy = {
    all: function(cb){
        orm.selectAll("puppies", function(res){
            cb(res);
        });
    },
    create: function(cols, vals, cb){
        orm.insertOne("puppies", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb){
        orm.update("puppies", objColVals, condition, function(res){
            cb(res);
        })
    }
}

module.exports = puppy;