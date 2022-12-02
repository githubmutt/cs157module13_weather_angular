const express = require('express');
//const employeeDatabase = require("./employeeDatabase.js");

const app = express();

app.use(express.json());
app.use(express.static('public'));




app.listen(3000, () => console.log('port #3000: server started'));
