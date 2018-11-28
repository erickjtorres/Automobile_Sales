var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: "3000",
  user: "erick",
  password: "torres",
  database: "mydb"
});

//con.connect(function(err) {
//  if (err) throw err;
//  var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
//  con.query(sql, function (err, result) {
//    if (err) throw err;
//    console.log("Number of records deleted: " + result.affectedRows);
//  });
//});

con.connect();
 
con.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
con.end();