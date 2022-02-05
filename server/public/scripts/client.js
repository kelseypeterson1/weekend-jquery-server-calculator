$(document).ready(onReady);

function onReady() {
    console.log('test')
    $('#equals-sign').on('click', sendInputs)
    $('#plus-sign').on('click', plusOperator)
    $('#minus-sign').on('click', minusOperator)
    $('#multiplication-sign').on('click', multiplicationOperator)
    $('#division-sign').on('click', divisionOperator)
} // end onReady


// <GET & POSTS>---------------------------------------
// send inputs to server
function sendInputs() {
    $.ajax({
        method: 'POST',
        url: '/numbers',
        data: {
            firstNumber: $('#first-number-input').val(),
            secondNumber: $('#second-number-input').val(),
            operator: operator,
        }
    }).then(function(response) {
        console.log('Sent numbers to the server');
        receiveAnswer();
    }).catch(function(response) {
        console.log('Wasn\'t able to send numbers to the server', response)
    })
} // end sendInputs

// get the answer to the equation from the server
function receiveAnswer() {
    $.ajax({
        method: 'GET',
        url: '/answer'
    }).then(function(response) {
        console.log('answer received from server', response);
        answer = response;
        receiveHistory();
    }).catch(function(response) {
        console.log('answer wasn\'t received from the server', response);
    })
} // end receiveAnswer

// get the history of equations from the server
function receiveHistory() {
    $.ajax({
        method: 'GET',
        url: '/history'
    }).then(function(response) {
        console.log('history received from server', response);
        // answer and the history of prior equations is rendered to DOM
        equationHistory = response;
        renderToDom(response);
    }).catch(function(response) {
        console.log('history wasn\'t received from the server', response);
    })
} // end receiveHistory
// </GET & POSTS>---------------------------------------


// <FUNCTIONS & VARIABLES>-----------------------------
let answer;
let operator;
let equationHistory;

function plusOperator() {
    operator = "+"
}
function minusOperator() {
    operator = "-"
}
function multiplicationOperator() {
    operator = "*"
}
function divisionOperator() {
    operator = "/"
}

function renderToDom(answer) {
// rendering the equation history to the DOM
    $('#equation-history').empty()
    for (equation of equationHistory) {
        $('#equation-history').append(
            `<li>${equation}</li>`
        )
    }
// rendering the answer to the DOM
    $('#result').empty()
    $('#result').append(answer)
}
// </FUNCTIONS & VARIABLES>-----------------------------