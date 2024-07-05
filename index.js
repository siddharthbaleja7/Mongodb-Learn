const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json()); // this is use as the middleware
mongoose.connect('mongodb+srv://siddharthbaleja83:nPUPwWFoonIFQfiS@cluster0.ziffamf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) =>{
    console.log('Error connecting to MongoDB',err);
})
//We have to create a product schema
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

const productModel = mongoose.model('products',productSchema)

// create
app.post('/api/products' , async(req,res) => {
    const body = req.body;
    const product = productModel.create({
        product_name : body.product_name,
        price: body.price,
        isInStock : body.isInStock,
        category : body.category
    })
    console.log(product)
    return res.status(201).json({message : 'Barbados me janda gadenge'});
});

app.listen(3002, () => {
    console.log('Server is running on port 3002');
});