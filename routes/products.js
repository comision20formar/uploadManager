const express = require("express");
const {
  list,
  addProductOneImage,
  storeProductOneImage,
  editProductOneImage,
  updateProductOneImage,
  deleteProductOneImage,
  addProductMultipleImages,
  storeProductMultipleImages,
  detailProductMultipleImages,
  addProductMainImage,
  storeProductMainImage,
  detailProductMainImage,
  editProductMultipleImages,
  updateProductMultipleImages,
  deleteProductMultipleImages,
} = require("../controllers/productsController");
const { uploadOneImage } = require("../middlewares/upload");
const router = express.Router();

/* /products */
router
  .get("/", list)
  /* una imagen */
  .get("/addOneImage", addProductOneImage)
  .post("/addOneImage", uploadOneImage.single("image"), storeProductOneImage)
  .get('/editOneImage/:id',editProductOneImage)
    .put('/updateOneImage/:id',uploadOneImage.single("image"),updateProductOneImage)
    .delete('/deleteOneImage/:id',deleteProductOneImage)

  /* varias imágenes */
  .get("/detailMultipleImages/:id", detailProductMultipleImages)
  .get("/addMultipleImages", addProductMultipleImages)
  .post(
    "/addMultipleImages",
    uploadOneImage.array("images"),
    storeProductMultipleImages
  )
  .get('/editMultipleImages/:id',editProductMultipleImages)
    .put('/updateMultipleImages/:id',uploadOneImage.array("images"),updateProductMultipleImages)
    .delete('/deleteMultipleImages/:id',deleteProductMultipleImages)

  /* una imagen principal y varias secundarias */
  .get("/detailMainImage/:id", detailProductMainImage)
  .get("/addMainImage", addProductMainImage)
  .post(
    "/addMainImage",
    uploadOneImage.fields([
      {
        name: "mainImage",
      },
      {
        name: "images",
      },
    ]),
    storeProductMainImage
  );
/*     .get('/editMainImage/:id',editProductMainImage)
    .put('/updateMainImage/:id',updateProductMainImage)
    .delete('/deleteMainImage/:id',deleteProductMainImage) */

module.exports = router;
