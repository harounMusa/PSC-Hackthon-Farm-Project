const mongoose = require('mongoose')

const producsSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true,"please enter a product name"],
        },
        quantity:{
            type: Number,
            required: true,
            default: 0,
        },
        price:{
            type: Number,
            requierd: true,
            default: 0,
        },
        image:{
            type: String,
            requierd: false,
        },
    },
    {
        timestamps: true,
    }
)

const Products = mongoose.model('Product', producsSchema)

module.exports = Products