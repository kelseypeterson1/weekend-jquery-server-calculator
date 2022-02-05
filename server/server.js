// <SERVER SETUP>-------------------------------------
// getting express and body parser set up
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
// </SERVER SETUP>-------------------------------------


// <GET & POSTS>---------------------------------------
// this POST will receive numbers from the client
app.post('/numbers', function(req, res) {
    let firstNumber = req.body.firstNumber;
    let secondNumber = req.body.secondNumber;
    let operator = req.body.operator;
    console.log("First number is", firstNumber)
    console.log("Second number is", secondNumber)
    console.log("Operator is", operator)
    
    // send back a status code of 201
    res.sendStatus(201);
    // doMath(firstNumber, secondNumber);
})

// this GET will send back the answer to the math to the client.js
app.get('/answer', function(req, res) {
    console.log('Request at /answer was made', req.body);
    // res.send(answer);

});
// </GET & POSTS>---------------------------------------


// <FUNCTIONS & VARIABLES>-----------------------------
function doMath(firstNumber, secondNumber) {

}



// </FUNCTIONS & VARIABLES>---------------------------


// <SERVER SETUP>-------------------------------------
// express is listening and ready to host the server
app.listen(port, function() {
    console.log('listening on port', port);
});
// </SERVER SETUP>-------------------------------------