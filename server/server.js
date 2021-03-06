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
    let firstNumber = Number(req.body.firstNumber);
    let secondNumber = Number(req.body.secondNumber);
    let operator = req.body.operator;
    console.log("First number is", firstNumber)
    console.log("Second number is", secondNumber)
    console.log("Operator is", operator)

    // send back a status code of 201
    res.sendStatus(201);

    // figuring out the answer to the equation
    doMath(firstNumber, secondNumber, operator);

    // adding the equation sent from the client to the numberHistory variable
    let equation = `${firstNumber} ${operator} ${secondNumber} = ${answer}`
    equationHistory.push(equation)
}) // end app.post

// this GET will send back the answer to the math to the client.js
app.get('/answer', function(req, res) {
    console.log('Request at /answer was made. Sending answer', answer);
    res.send(answer.toString());
}) // end app.get

// this GET will send back the history of equations to the client.js
app.get('/history', function(req, res) {
    console.log('Request at /history was made. Sending equation history', equationHistory);
    res.send(equationHistory);
}); // end app.get

// this GET will clear the history of equations on the server side
app.get('/clear', function(req, res) {
    equationHistory = [];
    console.log('Request at /clear was made. Equation history is erased', equationHistory);
    res.sendStatus(200);
}); // end app.get

// </GET & POSTS>---------------------------------------


// <FUNCTIONS & VARIABLES>-----------------------------
let equationHistory = [];
let answer = [];

function doMath(firstNumber, secondNumber, operator) {
    let add = firstNumber + secondNumber;
    let subtract = firstNumber - secondNumber;
    let multiply = firstNumber * secondNumber;
    let divide = firstNumber / secondNumber;
    
    switch (operator) {
        case '+':
            answer = add;
            break;
        case '-':
            answer = subtract;
            break;
        case '*':
            answer = multiply;
            break;
        case '/':
            answer = divide;
            break;
    }
}
// </FUNCTIONS & VARIABLES>---------------------------


// <SERVER SETUP>-------------------------------------
// express is listening and ready to host the server
app.listen(port, function() {
    console.log('listening on port', port);
});
// </SERVER SETUP>-------------------------------------