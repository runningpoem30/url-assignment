const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({
     redirectUrl : {
        type : String,
        required : true 
    },
    shortId : {
        type : String , 
        required : true ,
        unique : true
    },
    visitHistory : [
        {
            timeStamp : {
                type : Number
            }
        }
    ]
})


const URL = mongoose.model('URLMODEL' , urlSchema)

module.exports = {
    URL
}