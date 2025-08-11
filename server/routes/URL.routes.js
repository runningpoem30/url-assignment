const Router = require("router")
const router = Router()

const{ urlController , urlShortId} = require("../controller/URL.controller")


console.log(urlController)

router.post('/' , urlController )
router.get('/:shortid' , urlShortId)

// this doesnt seem to woork

module.exports = {
    router
}