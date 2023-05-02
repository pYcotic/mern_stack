const express = require('express');
const router = express.Router();
const upload = require("../controllers/uploadController")

const {
    addProduct,
    getAllProducts,
    getOneProduct,
    deleteProduct,
    updateProduct,
} = require("../controllers/productController")


// Create a product upload its image and save the image url to the db with the rest of its detains
router.post(
    '/',
    upload.fields([
        { name: 'image' },
        { name: 'price' },
        { name: 'size' },
        { name: 'availability' }]
    ),
    addProduct
);

// Returns all products in db
router.get('/', getAllProducts);

// Returns one product from its id
router.get('/:id', getOneProduct);

// Deletes a product with its id
router.delete('/:id', deleteProduct);

// Updates the product with id
router.patch('/:id', updateProduct);

module.exports = router;
