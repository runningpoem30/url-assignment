const express = require("express")
const app = express()
const PORT = 5050
const dotenv = require("dotenv")
const run  = require("./database")
dotenv.config()




app.get('/' , (req , res) => {
    res.send("hi there from server")
}) 


app.listen(PORT , () => {
    run()
    console.log("data base connected")
    console.log(`app is listening on port ${PORT}`)
})