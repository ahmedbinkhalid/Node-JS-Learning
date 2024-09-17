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
exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.FindById(prodId, product =>{
        res.render('shop/product-detail', {product: product, pageTitle: product.title, path: '/products'})
    })
};
exports.getcart = (req, res, next) =>{
    res.render(
        'shop/cart',
        {
            pageTitle: 'cart',
            path: '/cart'
        }
    )
}
exports.getOrders = (req, res, next) =>{
    res.render(
        'shop/orders',
        {
            pageTitle: 'orders',
            path: '/orders'
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

