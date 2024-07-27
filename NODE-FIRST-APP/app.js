const http = require('http');

const express = require("express");

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./Routes/admin');

const shopRouter = require('./Routes/shop');

const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData.routes);
app.use(shopRouter);

app.use((req, res, next)=>{
    res.status(404).render('404');
});

app.listen(3000);