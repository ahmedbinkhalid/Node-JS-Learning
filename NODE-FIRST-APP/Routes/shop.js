const express = require('express');

const rootDir = require('../util/path')

const path = require('path');
const { product } = require('./admin');

const adminData = require('./admin');

const router = express.Router();


router.get('/', (req, res, next)=>{
    console.log(adminData.product);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    
});
module.exports = router;
