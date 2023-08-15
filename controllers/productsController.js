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
}