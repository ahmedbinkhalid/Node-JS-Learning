const http = require('http');

const express = require("express");

const bodyParser = require('body-parser');

const app = express();

const adminRouter = require('./Routes/admin');

const shopRouter = require('./Routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRouter);
app.use(shopRouter);

app.listen(3000);