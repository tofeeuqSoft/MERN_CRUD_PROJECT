const express = require("express");
const ProductsController = require("../controller/ProductsController");
const router = express.Router();


//C
router.post("/CreateProduct", ProductsController.CreateProduct)
//R
router.get("/ReadProduct", ProductsController.ReadProduct)
//U
router.post("/UpdateProduct/:id", ProductsController.UpdateProduct)
//D
router.get("/DeleteProduct/:id", ProductsController.DeleteProduct)




module.exports = router;