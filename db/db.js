const Sequelize = require('sequelize')
const db = new Sequelize('shopdb','shopper', 'shoppass',{
    host: 'localhost',
    dialect:'mysql',
    pool:{
        min:0,
        max:5,
    }
})

