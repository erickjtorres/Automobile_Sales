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
function insert(query, values) {
con.connect(function(err) {
  if (err) throw err;
  con.query(query, [values], function (err, result) {
    if (err) throw err;
    console.log("Success")
    return result
  });
});
}

function get(query){
	con.connect(function(err){
		if (err) throw err;
		con.query(query, function(err, result){
			if(err) throw err;
			console.log(result)
			return result
		});
	});
}


exports.customer = function(fname, lname, phone, email, password,st_num, st, city, state) {
    var query = "INSERT INTO CUSTOMER(FNAME, LNAME, PHONE, EMAIL, PASS, st_num, st, city, state) VALUES ?"
    var values = [[fname, lname, phone, email, password, st_num, st, city, state]]
 
     
  //var values = [['fname', 'lname', 1235, 'email', 'password', 5, 'hull', 'city', 'state']]
  
  return insert(query, values)
}

exports.employee = function(fname, lname, phone, did, email, password){
	var query = "INSERT INTO EMPLOYEE(FNAME, LNAME, PHONE, DID, EMAIL, PASS) VALUES ?"
    var values = [[fname, lname, phone, did, email, password]]

    return insert(query, values)

}

exports.login = function(email, password){
	var query = "SELECT CID FROM CUSTOMER WHERE (EMAIL=email and PASS=password)"
	return get(query)
}

exports.purchases = function(cid){
  var query = "SELECT s.VIN, BRAND, MODEL, COLOR, d.FNAME, e.FNAME, e.LNAME, s.DOS FROM SALES s JOIN VEHICLE v ON s.VIN=v.VIN JOIN EMPLOYEE e ON e.EID=s.EID JOIN DEALER d ON d.DID=s.DID WHERE CID=cid"
  return get(query)
  
}

// exports.login = function(eEmail, ePassword){
	
// }


