var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "nodejs",
  password: "0131rkdms",
  database: "opentutorials",
});

connection.connect();

connection.query("SELECT * FROM topic", function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end();
