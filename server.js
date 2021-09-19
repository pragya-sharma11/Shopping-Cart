const express = require('express')
const path = require('path')
const app = express()
app.use('/', express.static(path.join(__dirname,'public')))

app.use('/api', require('./routes/api').route)
/**
 * require('x')
 * it tries to find x.js if it's not present then it 
 * tries to find s.json,if it is absent 
 * then it tries to find index.js inside x i.e. -> 'x/index.js'
 */
app.listen(2678,()=>{
    console.log("server start on http://localhost:2678")
})
