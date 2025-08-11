const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000;
const dotenv = require("dotenv")
const run  = require("./database")
const {router}  = require("./routes/URL.routes")
dotenv.config()
const cors = require("cors")
app.use(cors())

app.use(express.json())
console.log(router)


app.get('/' , (req , res) => {
    res.send("hi there from server")
}) 

app.use('/url' , router)


app.listen(PORT , () => {
    run()
    console.log("data base connected")
    console.log(`app is listening on port ${PORT}`)
})