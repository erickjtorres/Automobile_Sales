
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();


//using cors to call it from another server
app.use(cors());

//using bodyparser to read in fetch body requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//dummy data
const emails = ["erick"]
const passwords = ["torres"]


//This is in order to read body requests as well
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Here we are handling the login request
app.post('/login', function (req, res) {
    if (emails.includes(req.body.eEmail) && passwords.includes(req.body.ePassword)) {
        console.log(req.body['ePassword']);
        res.send({valid: true});
    } else {
        console.log(req.body['eEmail']);
        res.send({valid: false});
    }
  })

//This is where we will be listening to the requests
app.listen(3001, () => {
    console.log('Products server listening on port 3001')
})