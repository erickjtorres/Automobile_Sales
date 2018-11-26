const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const emails = ["ericktorres10@hawk.com"]
const passwords = ["mymom"]


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/login', function (req, res) {
    console.log(req.body);
    if (emails.includes(req.body.eEmail) && passwords.includes(req.body.ePassword)) {
        console.log(req.body['ePassword']);
        res.send({valid: true});
    } else {
        console.log(req.body['eEmail']);
        res.send({valid: false});
    }
  })

app.listen(3001, () => {
    console.log('Products server listening on port 3001')
})