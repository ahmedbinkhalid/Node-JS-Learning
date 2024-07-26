const express = require('express');

const rootDir = require('../util/path')

const path = require('path');
const { product } = require('./admin');

const adminData = require('./admin');

const router = express.Router();


router.get('/', (req, res, next)=>{
    const products = adminData.product;
    res.render('shop', {prods: products, docTitle: 'Shop'});
    
    
});
module.exports = router;
