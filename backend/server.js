require('dotenv').config()

const express = require('express')
const { default: mongoose } = require('mongoose')
const creationRoutes = require('./routes/creations')

// express app
const app = express()

// middleware
app.use(express.json())

// routes
app.use('/api/creations', creationRoutes)

// connect to db
mongoose.connect(process.env.MONGODB_URI)
    .then(() =>{
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port 4000.')
        })
    })
    .catch((err) => {
        console.log(err)
    })