// getting express and body parser set up
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));



// this POST will receive numbers from the client
app.post('/numbers', function(req, res) {
    let firstNumber = req.body.firstNumber;
    let secondNumber = req.body.secondNumber;
    console.log("First number is", firstNumber)
    console.log("Second number is", secondNumber)
    // send back a status code of 201
    res.sendStatus(201);
})

// express is listening and ready to host the server
app.listen(port, function() {
    console.log('listening on port', port);
});