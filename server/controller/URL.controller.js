const { timeStamp } = require("console");
const {URL} = require("../model/URL.model")

const {nanoid} = require("nanoid")
console.log(URL)


async function urlController(req , res) {
    try{
        const shortId = nanoid(8)
        const body = req.body.url;
        console.log(body)
       // if(!body.url) return res.status(400).json({error : 'url is required '})

        await URL.create({
        shortId : shortId,
        redirectUrl : body
       })

       return res.json({
        id : shortId
       })
    }
    catch(err){
        console.log(err)
    }
}

async function urlShortId (req ,res ) {

    try{
        const shortId = req.params.shortid; 
        const originalUrl = await URL.findOneAndUpdate({shortId}, {
            $push : {
                visitHistory : {
                    timeStamp : Date.now()
                }
            }
        })

        res.redirect(originalUrl.redirectUrl)
    }
    catch{

    }
}



module.exports = {
    urlController,
    urlShortId
}

