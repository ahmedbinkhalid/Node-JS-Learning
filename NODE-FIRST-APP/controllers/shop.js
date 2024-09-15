const Product = require('../models/products');

exports.getProducts= (req, res, next)=>{
    Product.fetchAll(products =>{
        res.render('shop/product-list', {prods: products, pageTitle: 'Shop', path: '/products'});
    });
    
};

exports.getIndex = (req, res, next) =>{
    Product.fetchAll(products =>{
        res.render('shop/index', {prods: products, pageTitle: 'Index', path: '/'});
    });
}

exports.getcart = (req, res, next) =>{
    res.render(
        'shop/cart',
        {
            pageTitle: 'cart',
            path: '/cart'
        }
    )
}

exports.getcheckout = (req, res, next) =>{
    res.render('/checkout',
        {
            pageTitle: 'Cart',
            path: '/checkout'
        }
    )
}

