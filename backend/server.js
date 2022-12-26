const { response } = require("express")
const express = require("express")

// express app
const app = express()


// routes
app.get("/", (req, res) => {
    res.json({msg: "Welcome to the app"})
})


// listen for requests
app.listen(4000, () => {
    console.log("Listening On Port 4000!!")
})