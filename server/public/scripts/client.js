$(document).ready(onReady);

function onReady() {
    console.log('test')
    $('#equals-sign').on('click', sendInputs)
    $('#plus-sign').on('click', plusOperator)
    $('#minus-sign').on('click', minusOperator)
    $('#multiplication-sign').on('click', multiplicationOperator)
    $('#division-sign').on('click', divisionOperator)
}


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
        receiveMath();
    }).catch(function(response) {
        console.log('Wasn\'t able to send numbers to the server', response)
    })
}


function receiveMath() {
    // get the answer to the equation from the server
    $.ajax({
        method: 'GET',
        url: '/answer'
    }).then(function(response) {
        console.log('answer received from server', response);
        // answer rendered to DOM
        // renderToDom(response);
    }).catch(function(response) {
        console.log('answer wasn\'t received from the server', response);
    })
}


let operator;

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
    Search
}