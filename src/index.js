const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get('/line', (req, res) => {
    res.sendFile(__dirname + "/line.html");
})
app.get('/colocacoes', (req, res) => {
    res.sendFile(__dirname + "/colocacoes.html");
})
app.get('/contato', (req, res) => {
    res.sendFile(__dirname + "/contato.html");
})

app.listen('3000');