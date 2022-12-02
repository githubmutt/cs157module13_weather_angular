

const express = require('express');
//const employeeDatabase = require("./employeeDatabase.js");

const app = express();

app.use(express.json());
app.use(express.static('public'));



//
app.listen(process.env.PORT || 3000, () => console.log('port #: server started'));

