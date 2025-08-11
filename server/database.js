require('dotenv').config({ path: __dirname + '/.env' });

const { MongoClient, ServerApiVersion } = require('mongodb');

const mongoose = require("mongoose")

const uri = process.env.MONGODB_URI

async function run(){
    return mongoose.connect(uri)
    
}
module.exports =  run
