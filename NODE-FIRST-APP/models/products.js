const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.JSON');

const getProductsfromFile = cb => {
    fs.readFile(p, (err, fileContent)=>{
        if(err){
            return cb([]);
        } else{
          cb(JSON.parse(fileContent));
        }
    });
}

module.exports = class Product {
    constructor(id,title, imageUrl, price, description) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }
    save(){
        
        
        getProductsfromFile(products => {
            if(this.id){
            const existingProductIndex = products.findIndex(prod => prod.id === this.id)
            const updatedProducts = [...products];
            updatedProducts[existingProductIndex] = this;
            fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
                console.log(err)
            });
            } else{
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err)
            });
        }
            
        });
};

    static deleteById(id){
        getProductsfromFile(products =>{
            const UpdatedProducts = products.filter(prod => prod.id !== id);
            fs.writeFile(p, JSON.stringify(UpdatedProducts), err =>{
                if(!err){
                    
                }
            })
        })
    }
    static fetchAll(cb){
        getProductsfromFile(cb);
    }
    static FindById(id, cb) {
        getProductsfromFile(products =>{
            const product = products.find(p => p.id === id);
            cb(product);
        })
    }
}

