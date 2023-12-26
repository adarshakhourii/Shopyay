const express = require('express')
const router = express.Router()
const {getProducts, getProductById, getBestsellers, adminGetProducts, adminDeleteProduct, adminCreateProduct
,adminUpdateProduct, adminUpload, adminDeleteProductImage} = require("../controllers/productController")
const {verifyIsLoggedIn, verifyIsAdmin} = require("../middleware/verifyAuthToken")


router.get("/category/:categoryName/search/:searchQuery")
router.get("/category/:categoryName",getProducts)
router.get("/search/:searchQuery", getProducts)
router.get("/", getProducts)
router.get("/bestsellers", getBestsellers)
router.get("/get-one/:id", getProductById)

//admin routes: use middleware for this to verify if the user is logged in
router.use(verifyIsLoggedIn)
router.use(verifyIsAdmin)
router.get("/admin", adminGetProducts)
router.delete("/admin/:id", adminDeleteProduct)
router.delete("admin/image/:imagePath/:productID", adminDeleteProductImage)
router.put("/admin/:id", adminUpdateProduct)//for updating=> put keyword
router.post("/admin", adminCreateProduct)
router.post("/admin/upload", adminUpload)

module.exports = router
