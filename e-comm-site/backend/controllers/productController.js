const Product = require('../models/productModel');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

// create new product


const addProduct = async (req, res) => {
    try {
        const { price, size, availability } = req.body;
        const imagePath = req.files['image'][0].path;
        const imageFilename = path.basename(imagePath);
        const imageUrl = `${req.protocol}://${req.get('host')}/images/${imageFilename}`;
        const product = await Product.create({
            image: imageUrl,
            price,
            size,
            availability,
        });

        res.status(200).json({product});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}).sort({ createdAt: -1 });
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// get one product
const getOneProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
            .status(404)
            .json({ error: `id:${id} is not a valid id` });
    }
    const product = await Product.findById(id);

    if (!product) {
        return res
            .status(404)
            .json({ error: `Product with id:${id} does not exist` });
    }

    res.status(200).json(product);
};

// update product
const updateProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
            .status(404)
            .json({ error: `id:${id} is not a valid id` });
    }

    const product = await Product.findOneAndUpdate({ _id: id }, {
        ...req.body,
    });

    if (!product) {
        return res
            .status(404)
            .json({
                error: `Product with id:${id}, does not exist and/or was not updated`,
            });
    }

    res.status(200).json(product);
};
// delete product
const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
            .status(404)
            .json({ error: `id:${id} is not a valid id` });
    }

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
        return res
            .status(404)
            .json({
                error: `Product with id:${id} does not exist and therefore cannot be deleted`,
            });
    }
    res.status(200).json(deletedProduct);
};

module.exports = {
    addProduct, // use an array to apply multiple middlewares to a single route handler
    getAllProducts,
    getOneProduct,
    deleteProduct,
    updateProduct,
};