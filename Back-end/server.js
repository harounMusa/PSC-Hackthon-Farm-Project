const express = require('express')
const mongoose = require('mongoose')
const products = require('./routes/products.js')

const PORT = process.env.PORT || 3000
const mongodbURL = process.env.MONGODB_STRING
const app  = express();

// json middleware
app.use(express.json())
// Router middleware
app.use('/api/products', products)

mongoose.connect(mongodbURL)
.then(() => {
    console.log('Connect to mongodb')
    app.listen(PORT, ()=> {
        console.log(`app is running on port: ${PORT}`)
    })
}).catch((error) => {
    console.log(error)
})