// getting express and body parser set up
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

// express is listening and ready to host the server
app.listen(port, function() {
    console.log('listening on port', port);
});