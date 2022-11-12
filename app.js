const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const routes = require('./routes/video')
const app = express()
const PORT = 8011
const MongoURL = 'mongodb://localhost:8989/videostream'
app.use(bodyparser.json())
app.use('/',routes)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
app.listen(PORT, () => { console.log(`The server is started on the PORT : ${PORT}`); })
mongoose.connect(MongoURL, () => {console.log(`Connction with the MongoDB success`)})