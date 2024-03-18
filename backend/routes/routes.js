import express from 'express'
const router = express.Router()

// import functions from controllers
import {
    showProducts,
    showProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/product.js'

// get all products
router.get('/products', showProducts)

// get single product
router.get('/products/:id', showProductById)

// create new product
router.post('/products', createProduct)

// update product
router.put('/products/:id', updateProduct)

// delete product
router.delete('/products/:id', deleteProduct)

export default router