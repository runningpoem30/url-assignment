
const mongoose = require("mongoose")
var validator = require('validator');
const urlSchema = new mongoose.Schema({
    longUrl : {
        type : String,
        validate : {
            validate : validator.isURL()
        },
        required : true 
    },
    shortUrl : {
        type : String , 
        required : true , 
        unique : true
    },
    shortId : {
        type : String , 
        required : true 
    }
})


