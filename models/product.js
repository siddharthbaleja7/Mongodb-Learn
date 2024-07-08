const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    product_name : {
        type : String,
        required : true
    },
    price :{
        type : String, // if we want to add currency we do string else we do the number
        required : true
    },
    isInStock : {
        type : Boolean,
        required : true
    },
    category : {
        type : String,
        required : true
    }
})
//We have to create a product schema


module.exports = mongoose.model("products", productSchema);