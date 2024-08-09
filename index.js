const express = require('express')
const app = express()
const cors = require('cors')
const env = require('dotenv')
const ConnectDB = require('./modules/ConnectDB')
env.config()
app.use(cors({
    origin:'*'
    
}))
ConnectDB()
app.use(express.json())

app.use('/' , require('./routes/ServerRoute'))


app.listen(4000 , console.log("Your Server Succesfuly Launched"))