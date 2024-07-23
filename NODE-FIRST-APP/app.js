const http = require('http');

const express = require("express");

const bodyParser = require('body-parser');

const app = express();

const adminRouter = require('./Routes/admin');

const shopRouter = require('./Routes/shop');

const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRouter);
app.use(shopRouter);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);