const express = require('express');

const app = express();
app.listen(5000, () => console.log("Server running on port 5000."));

const sum = require('./controller/sumController');
const concat = require('./controller/concatController');

app.get('/sum/:number', (req, res) => sum(req, res));
app.put('/sum/:number', (req, res) => sum(req, res));

app.get('/concat/:name/:word', (req, res) => concat(req, res));
app.post('/concat/:name', (req, res) => concat(req, res));
app.delete('/concat/:name', (req, res) => concat(req, res));