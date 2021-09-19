const route = require('express').Router()
const Product = require('../../db/db').Product

route.get('/',(req,res)=>{
    //get all products
    Product.findAll().then((products)=>{
        res.status(200).send(products)
    }).catch(()=>{
        res.status(500).send({
            error:"Could not get the products."
        })
    })
})

route.exports('/',(req,res)=>{
    //post all products to db.
    Product.create().then((product)=>{
        res.status(201).send(product)
    }).catch(()=>{
        res.status(501).send({
            error:"Unable to upload a product"
        })
    })
})



exports = module.exports={
    route
}