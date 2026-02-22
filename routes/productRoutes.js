const express = require("express");
const router = express.Router();
// fixed syntax error in declaring createProduct (missing brackets)
// combine function delaring in one object
const {createProduct, getAllProducts} = require("../controllers/productController");
// const { getAllProducts } = require("../controllers/productController");

// replaced get with post method to be suitable for createProduct
router.post("/products", createProduct);
router.get("/products/all", getAllProducts);

module.exports = router;
