var mysql = require('mysql');
var exports = module.exports = {};

var con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "password",
  database: "CS425"
});

// con.connect(function(err) {
//  if (err) throw err;
//  var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
//  con.query(sql, function (err, result) {
//    if (err) throw err;
//    console.log("Number of records deleted: " + result.affectedRows);
//  });
// });



// con.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
function queries(query, values) {
con.connect(function(err) {
  if (err) throw err;
  con.query(query, [values], function (err, result) {
    if (err) throw err;
    console.log("Success")
  });
});
}

exports.esignup = function(fname, lname, phone, email, password,st_num, st, city, state) {
  var query = "INSERT INTO CUSTOMER(FNAME, LNAME, PHONE, EMAIL, PASS, st_num, st, city, state) VALUES ?"
  //var values = [[fname, lname, phone, email, password, st_num, st, city, state]]
  var values = [['fname', 'lname', 1235, 'email', 'password', 5, 'hull', 'city', 'state']]
  return queries(query, values)
}

exports.signup = function(fname, lname, phone, email, password,st_num, st, city, state, type) {
  if(type=="Customer"){
    var query = "INSERT INTO CUSTOMER(FNAME, LNAME, PHONE, EMAIL, PASS, st_num, st, city, state) VALUES ?"
    var values = [[fname, lname, phone, email, password, st_num, st, city, state]]
  }
  else{
     var query = "INSERT INTO CUSTOMER(FNAME, LNAME, PHONE, EMAIL, PASS, st_num, st, city, state) VALUES ?"
     var values = [[fname, lname, phone, email, password, st_num, st, city, state]]
  //var values = [['fname', 'lname', 1235, 'email', 'password', 5, 'hull', 'city', 'state']]
  }
  return queries(query, values)
}

// exports.login = function(eEmail, ePassword)


