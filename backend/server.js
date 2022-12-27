const express = require("express")
require("dotenv").config()
const mongoose = require("mongoose")

const postRoutes = require("./routes/posts")

// express app
const app = express()


// middleware
app.use(express.json()) // used to need body-parser
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/posts', postRoutes)

mongoose.set('strictQuery', false)

// connectt to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
        console.log(`Listening On Port ${process.env.PORT}!!`)
})
    })
    .catch((error) => {
        console.log(error)
    })


