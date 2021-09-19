const User = require('../../db/db').User
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
        res.status(200).send(users)
    }).catch((err)=>{
        res.status(500).send({
            error:"could not find the users."
        })
    })
})

route.post('/',(req,res)=>{
    User.create({
        name:req.body.name
    }).then((user)=>{
        res.status(201).send(user)
    }).catch(()=>{
        res.send(501).send({
            error:'Unable to create users'
        })
    })
})


exports = module.exports ={
    route
}