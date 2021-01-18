const express = require('express');
const app = express();
const port = 3401;

app.get('/', (req, res) => {
    res.send('<h1>GET request</h1>');
    let d = new Date();
    console.info(d);
});

app.post('/', (req, res) => {
    res.send('<h1>POST request<h1>');
});

app.listen(port, function () {
    console.info('listening on ' + port);
});