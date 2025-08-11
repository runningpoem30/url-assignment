const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require("dotenv");
const mongoose = require("mongoose")
dotenv.config()
const uri = process.env.MONDODB_URI

async function run(){
    return mongoose.connect(uri)
    
}
module.exports =  run
