const http = require('http');

const express = require("express");

const app = express();

app.use((req, res, next)=>{
    console.log("middleware 1");
    next();
});

app.use((req, res, next)=>{
    console.log("Middleware 2");
    res.send('<h1>Hello From Express.js!</h1>');
});

app.listen(3000);