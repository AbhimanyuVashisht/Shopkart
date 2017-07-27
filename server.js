
const express = require('express');
const path = require('path');
const app = express();
const shopKartCatalog = require('./db').productObj;
const bp = require('body-parser');



app.use('/', express.static(__dirname + '/public_static'));

app.get('/getcatalog', (req,res) =>{
    shopKartCatalog.findAll({
        attributes: ['product','description','price','prodId']
    }).then((products) => {
        console.log(products);
        res.send(products);
    }).catch((err)=>{
        console.log(err);
    })
});





app.listen(8000, function(){
    console.log("ServerRunning on http://localhost:8000/");
});