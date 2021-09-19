const route = require('express').Router()

route.use('/users', require('./users').route)
route.use('/products', require('./products').route)
//don't forget to put .route after require coz it is a middle ware.
exports=module.exports={
    route
}