$(document).ready(onReady);

function onReady() {
    console.log('test')
    $('#equals-sign').on('click', sendInputs)
}

function sendInputs() {
    $.ajax({
        method: 'POST',
        url: '/numbers',
        data: {
            firstNumber: $('#first-number-input').val(),
            secondNumber: $('#second-number-input').val(),
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
        renderSearchToDom(response);
    }).catch(function(response) {
        console.log('answer wasn\'t received from the server', response);
    })
}