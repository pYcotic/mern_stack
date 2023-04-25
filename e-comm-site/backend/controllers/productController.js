const Product = require('../models/productModel');
const mongoose = require('mongoose');

// create new product
const addProduct = async (req, res) => {
    // take the request body posted and assign them to these keys
    const { image, price, size, availability } = req.body;
    // create a new item in database using the assigned keys
    // if all is in order respond with what we created
    try {
        const product = await Product.create({
            image,
            price,
            size,
            availability,
        });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message }); // will respond with error message in the event that something went wrong
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
    addProduct,
    getAllProducts,
    getOneProduct,
    deleteProduct,
    updateProduct,
};
