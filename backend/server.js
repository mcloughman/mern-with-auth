const express = require("express")
require("dotenv").config()

const postRoutes = require("./routes/posts")

// express app
const app = express()


// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/posts', postRoutes)


// listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Listening On Port ${process.env.PORT}!!`)
})