const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
dbLink = 'mongodb://dimasgardenia:dimas1990@cluster0-shard-00-00-axjli.mongodb.net:27017,cluster0-shard-00-01-axjli.mongodb.net:27017,cluster0-shard-00-02-axjli.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'

mongoose.connect(dbLink)

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const blogs = require('./routers/blog')

app.use('/',blogs)

app.listen(process.env.PORT || 3000, ()=>{
  console.log('i am running at port 3000');
})

module.exports = app
