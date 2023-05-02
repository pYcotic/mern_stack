const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image: {
        type: String, // Assuming you will store the image URL
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    availability: {
        type: Boolean,
        required: true,
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

