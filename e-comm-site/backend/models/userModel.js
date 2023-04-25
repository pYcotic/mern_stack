const mongoose = require('mongoose')
const bcrypt = require("bcryptjs");
const validator = require('validator');

const Cart = require("./cartModel")
const Wishlist = require("./wishlistModel")

require('dotenv').config();

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
    },
    address: {
        type: {
            street: { type: String },
            city: { type: String },
            state: { type: String },
            zip: { type: String },
            country: { type: String }
        }
    },
    wishlist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wishlist',
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart'
    },
}, { collection: "users" })

// Create user function
userSchema.statics.createUser = async function (email, password) {
    // Validate inputs
    if (!email) {
        throw Error('Email is required');
    }

    if (!password) {
        throw Error('Password is required');
    }

    if (!validator.isEmail(email)) {
        throw Error('Invalid email');
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough');
    }

    // Check if email already exists
    const existingUser = await this.findOne({ email });

    if (existingUser) {
        throw Error('User with that email already exists');
    }

    // Hash password and create user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.create({ email, password: hashedPassword });
    if (user) {
        const cart = await Cart.create({user: user._id})
        const wishlist = await Wishlist.create({user: user._id});
        if (cart){
            user.cart = cart._id;
        }
        if (wishlist) {
            user.wishlist = wishlist._id;
        }
        await user.save();
    }
    return user;
}

// sign-in user function
userSchema.statics.signinUser = async function (email, password) {
    if (!email) {
        throw Error('Email is required');
    }

    if (!password) {
        throw Error('Password is required');
    }

    const user = await this.findOne({ email });

    if (!user) {
        throw Error('Invalid email');
    }

    // check password
    const matchPW = await bcrypt.compare(password, user.password);

    if (!matchPW) {
        throw Error('Invalid Password')
    }

    return user

}
// add to cart function

// add to wishlist function



module.exports = mongoose.model('User', userSchema)
