const express = require('express');
const { list, addProductOneImage, storeProductOneImage, editProductOneImage, updateProductOneImage, deleteProductOneImage, addProductMultipleImages, storeProductMultipleImages, detailProductMultipleImages } = require('../controllers/productsController');
const { uploadOneImage } = require('../middlewares/upload');
const router = express.Router();

/* /products */
router
    .get('/', list )
    /* una imagen */
    .get('/addOneImage', addProductOneImage)
    .post('/addOneImage',uploadOneImage.single('image'), storeProductOneImage)
    .get('/editOneImage/:id',editProductOneImage)
    .put('/updateOneImage/:id',updateProductOneImage)
    .delete('/deleteOneImage/:id',deleteProductOneImage)

    /* varias imágenes */
    .get('/detailMultipleImages/:id',detailProductMultipleImages)
    .get('/addMultipleImages', addProductMultipleImages)
    .post('/addMultipleImages',uploadOneImage.array('images'), storeProductMultipleImages)
   /*  .get('/editMultipleImages/:id',editProductMultipleImages)
    .put('/updateMultipleImages/:id',updateProductMultipleImages)
    .delete('/deleteMultipleImages/:id',deleteProductMultipleImages) */

module.exports = router;
