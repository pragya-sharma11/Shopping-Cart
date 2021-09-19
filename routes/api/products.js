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

route.post('/',(req,res)=>{
    //validate the value
    /**
     * NaN == Nan -> false
     * that's why we have a function -> isNaN(y)  -> true means y is not a number.
     */
    if(isNaN(req.body.price)){
        return res.status(403).send({
            error:"Price is not a valid number"
        })
    }
    //Add a new product
    Product.create({
        name:req.body.name,
        manufacturer : req.body.manufacturer,
        price:parseFloat(req.body.price)
    }).then((product)=>{
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