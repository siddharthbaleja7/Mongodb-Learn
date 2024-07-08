const express = require('express')
const router = express.Router();

const productControllers = require("../controllers/productControllers");

router.post("/api/products", productControllers.createProduct);

// get route

router.get("/api/products", productControllers.getallProducts);

// Get product by id

router.get("/api/products/:id", productControllers.getById);

// Update product

router.put("/api/products/:id", productControllers.updateProduct);

/// Delete 

router.delete("/api/products/:id", productControllers.deleteProduct);
module.exports = router
// create
// router.post('/api/products' , async(req,res) => {
//     const body = req.body;
//     const product = productModel.create({
//         product_name : body.product_name,
//         price: body.price,
//         isInStock : body.isInStock,
//         category : body.category
//     })
//     console.log(product)
//     return res.status(201).json({message : 'Barbados me janda gadenge'});
// });

// //get 
// router.get('/api/products',async(req,res) =>{
//     const allProducts = await productModel.find({})
//     return res.json(allProducts);
// })

// // get products by id
// router.get('/api/products/:id',async(req,res)=>{
//     const product = await productModel.findById(req.params.id);
//     return res.json(product);
// })
// //update

// router.put('/api/products/:id',async(req,res) => {
//     const updated = await productModel.findByIdAndUpdate(req.params.id,req.body);
//     return res.json(updated);
// })

// //delete
// router.delete('/api/products/:id',async(req,res)=>{
//     const deleteWord = await productModel.findByIdAndDelete(req.params.id);
//     return res.json(deleteWord);
// })
// module.exports = router;