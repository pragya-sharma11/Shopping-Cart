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
})



exports = module.exports={
    route
}