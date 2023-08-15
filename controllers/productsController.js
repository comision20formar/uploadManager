const { v4: uuidv4 } = require('uuid');
const { readJSON, writeJSON } = require("../data");

module.exports = {
    list : (req,res) => {
        return res.send('todos los productos')
    },
    addProductOneImage : (req,res) => {
        return res.render('productAddOneImage')
    },
    storeProductOneImage : (req,res) => {

        const products = readJSON('productsOneImage.json')

        products.push({
            id : uuidv4(),
            name : req.body.name,
            image : req.file ? req.file.filename : null
        })

        writeJSON(products,'productsOneImage.json')

        return res.redirect('/')
    },
    detailProductOneImage : (req,res) => {
        return res.render('detailProductOneImage',{
            product
        })
    },
    editProductOneImage : (req,res) => {
        return res.render('editProductOneImage', {
            product
        })
    },
    updateProductOneImage : (req,res) => {
        return res.send(req.body)
    },
    deleteProductOneImage : (req,res) => {
        return res.send('producto eliminado!!')
    },

/* multiples imágenes */
    detailProductMultipleImages : (req,res) => {
        const products = readJSON('productsMultipleImages.json')
        const product = products.find(product => product.id === req.params.id)
        return res.render('productDetailMultipleImages',{
            ...product
        })
    },

    addProductMultipleImages : (req,res) => {
        return res.render('productAddMultipleImages')
    },
    storeProductMultipleImages : (req,res) => {

        const products = readJSON('productsMultipleImages.json')

        products.push({
            id : uuidv4(),
            name : req.body.name,
            images : req.files.map(file => file.filename)
        })

        writeJSON(products,'productsMultipleImages.json')

        return res.redirect('/')
    },

    /* una imagen principal y varias secundarias */
    addProductMainImage : (req,res) => {
        return res.render('productAddMainImage')
    },
    storeProductMainImage : (req,res) => {

        const products = readJSON('productsMainImage.json');

        products.push({
            id : uuidv4(),
            name : req.body.name,
            mainImage : req.files.mainImage[0].filename,
            images : req.files.images.map(image => image.filename)
        })
     
        writeJSON(products,'productsMainImage.json')

        return res.redirect('/')
    },
    detailProductMainImage : (req,res) => {
        const products = readJSON('productsMainImage.json');
        const product = products.find(product => product.id === req.params.id)
        return res.render('productDetailMainImage',{
            ...product
        })
    },
}