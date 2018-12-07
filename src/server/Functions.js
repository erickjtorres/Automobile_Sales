var mysql = require('mysql');
var exports = module.exports = {};

// var con = mysql.createConnection({
var con = mysql.createPool({
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
con.getConnection(function(err) {
  if (err) throw err;
  con.query(query, [values], function (err, result) {
    if (err) throw err;
    return result
  });
});
}

function get(query){
	return new Promise(function(res, rej){
	// con.connect(function(err){
	con.getConnection(function(err) {
	if (err) throw err;
	con.query(query, function(err, result) {
		if(err) throw err;
		var string = JSON.stringify(result);
		var st = JSON.parse(string);
		// console.log(string);
		// console.log(result);
		// con.end();
		res( st);
		//return (st[0])
	});
});
	});
}


exports.customer = function(fname, lname, phone, email, password,st_num, st, city, state, gender, income) {
    var query = "INSERT INTO CUSTOMER(FNAME, LNAME, GENDER, INCOME, PHONE, EMAIL, PASS, st_num, st, city, state) VALUES ?"
    var values = [[fname, lname, gender, income, phone, email, password, st_num, st, city, state]]
 
     
  //var values = [['fname', 'lname', 1235, 'email', 'password', 5, 'hull', 'city', 'state']]
  
  return insert(query, values)
}

exports.employee = function(fname, lname,  did, email, password){
	var query = "INSERT INTO EMPLOYEE(FNAME, LNAME, DID, EMAIL, PASS) VALUES ?"
    var values = [[fname, lname, did, email, password]]

    return insert(query, values)

}

exports.c_login = function(email, password){
	var query = "SELECT CID FROM CUSTOMER WHERE EMAIL='" + email +  "' AND PASS = '" +password+"'";

	return new Promise(function(resolve, reject){
 		get(query).then(function(value){
 			resolve(value[0].CID)
 		})
 	});
}

exports.e_login = function(email, password){
	//console.log(email);
	//var query = 'SELECT * FROM EMPLOYEE WHERE PASS = ?';
 	var query = "SELECT EID FROM EMPLOYEE WHERE EMAIL='" + email + "'and PASS='" + password+"'";

 	//var data 
 	// get(query).then((res)=>{
 	// 	console.log("NEW DATA IS : " + res.data)
 	// })
 	return new Promise(function(resolve, reject){
 		get(query).then(function(value){
 			resolve(value[0].EID);
 		})
 	});
 	//console.log(get(query));
 	
	//var values = [[email, password]]
	//console.log(values)
	//console.log(get(query, values))
}

exports.cust_info = function(cid){
  var query = "SELECT s.VIN, BRAND, MODEL, COLOR, d.FNAME, e.FNAME, e.LNAME, s.DOS FROM SALES s JOIN VEHICLE v ON s.VIN=v.VIN JOIN EMPLOYEE e ON e.EID=s.EID JOIN DEALER d ON d.DID=s.DID WHERE CID=" + cid; 
  return new Promise(function(resolve, reject){
 		get(query).then(function(value){
 			// console.log(value)
 			resolve(value);
 		})
 	});
  
}

exports.emp_info = function(eid){
	var query = "SELECT s.DOS, s.CID, s.VIN, v.BRAND, v.MODEL, v.COLOR FROM SALES s JOIN VEHICLE v ON s.VIN=v.VIN WHERE EID="+eid
	return new Promise(function(resolve, reject){
 		get(query).then(function(value){
 			resolve(value);
 		})
 	});

}

exports.stock = function(eid){
	var query = "SELECT BRAND, MODEL, COLOR, count(*) AS CT FROM (SELECT * FROM VEHICLE WHERE DID=(SELECT DID FROM EMPLOYEE WHERE EID="+ eid +")) EMP_TO_DEAL GROUP BY BRAND, MODEL, COLOR"
	//var output2 = get(query2)
	//return output2
	return new Promise(function(resolve, reject){
 		get(query).then(function(value){
 			resolve(value);
 		})
 	});
}

exports.addVehicle = function(did, brand, model, color) {
	console.log(did)
	var cap = "SELECT CAPACITY FROM DEALER WHERE DID="+ did;
	var ans = get(cap);
	console.log(ans)

	// var query = "INSERT INTO VEHICLE (DID, BRAND, MODEL, COLOR) SELECT ? WHERE (SELECT CAPACITY FROM DEALER WHERE DID="+ did +") >0";

 //    var values = [[did, brand, model, color]];

    // return insert(query, values)
}

exports.deleteVehicle = function(vin) {
	var query = "DELETE FROM VEHICLE WHERE VIN"+ vin
	var data = get(query)
}

// exports.login = function(eEmail, ePassword){
	
// }


