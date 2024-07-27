const http = require('http');
const express = require("express");

const bodyParser = require('body-parser');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRouter = require('./Routes/admin');

const shopRouter = require('./Routes/shop');

const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRouter);
app.use(shopRouter);

app.use((req, res, next)=>{
    res.status(404).render('404', {pageTitle: 'Page not found', path: path});
});

app.listen(3000);