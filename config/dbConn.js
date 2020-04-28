var mysql = require("mysql");

var dbConn = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "puppy_db"
});

dbConn.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected by dbConn.js as id " + dbConn.threadId);
});

// export connects
module.exports = dbConn;