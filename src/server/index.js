
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const functions = require('./Functions');


const app = express();


//using cors to call it from another server
app.use(cors());

//using bodyparser to read in fetch body requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//dummy data
const emails = ["erick"]
const passwords = ["torres"]
const data = [{DATE: 'DATE', VIN: 'VIN', DID: 'DID', BRAND: 'BRAND', MODEL: 'MODEL', COLOR:'COLOR'},
{DATE: '11/23/2010', VIN: '1232', DID: '123123', BRAND: 'TESLA', MODEL: 'Model X', COLOR: 'RED'},
{DATE: '11/23/2010', VIN: '1232', DID: '123123', BRAND: 'TESLA', MODEL: 'Model X', COLOR: 'RED'}];


//This is in order to read body requests as well
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/signup', function(req, res) {
    if(req.body.type === 'c') {
        console.log(req.body.fname, req.body.lname, req.body.phone, req.body.email, req.body.password, req.body.st_num, req.body.st, req.body.city, req.body.state)
    } else if (req.body.type === 'e') {
        console.log('Not yet finished')
    }
});

//Here we are handling the login request
app.post('/login', function (req, res) {
    // if (emails.includes(req.body.eEmail) && passwords.includes(req.body.ePassword)) {
    //     console.log(req.body['ePassword']);
    //     res.send({valid: true});
    // } else {
    //     console.log(req.body['eEmail']);
    //     res.send({valid: false});
    // }
    // console.log(functions.signup())
    
    console.log(req.body.email);
    
  });

app.post('/purchases', function(req, res)  {
    //check for cid
    data = console.log(req.body.cid);
    res.send(data);

});

app.post('/sales', function(req, res) {
    //check for eid
    console.log(req.body.eid);
    res.send(data);

});

app.post('/stock', function(req, res) {
    //check for eid
    console.log(req.body.eid);
    res.send(data);

});


//This is where we will be listening to the requests
app.listen(3001, () => {
    console.log('Products server listening on port 3001')
})