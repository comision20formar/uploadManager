const { readJSON } = require("../data")

module.exports = {
    index : (req,res) => {

        const productsOneImage = readJSON('productsOneImage.json')
        const productsMultipleImages = readJSON('productsMultipleImages.json')
        return res.render('index', {
            productsOneImage,
            productsMultipleImages
        })
    }
}