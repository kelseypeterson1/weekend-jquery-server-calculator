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

    }).catch(function(response) {
        console.log('Wasn\'t able to send numbers to the server', response)
    })
}

