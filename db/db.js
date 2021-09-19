const Sequelize = require('sequelize')
const db = new Sequelize('shopdb','shopper', 'shoppass',{
    host: 'localhost',
    dialect:'mysql',
    pool:{
        min:0,
        max:5,
    }
})

const u=User= db.define('users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

const Product = db.defin('products',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    manufacturer:Sequelize.STRING,
    price:{
        type:Sequelize.FLOAT,
        allowNull:false,
        default:0.0
    }
})