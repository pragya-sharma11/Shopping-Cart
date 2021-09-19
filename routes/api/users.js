const User = require('../../db/db')
const route = require('express').Router()

route.get('/',(req,res)=>{
    //we want to fetch data from db and send to user.
    
    /**
     * it is a promising function
     * It returns all the users with their data.
     * It also has where object we can choose any particular users depending upon where clause.
     */
    User.findAll()
    .then((users)=>{

    }).catch((err)=>{
        res.status(500).send(()=>{
            error:"could not find the users."
        })
    })
})

exports = module.exports ={
    route
}