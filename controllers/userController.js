const UserModel = require("../models/user")


exports.createProduct = async (req, res) => {
    await UserModel.create({
     product_name: req.body.product_name,
     product_price: req.body.product_price,
     isInStock: req.body.isInStock,
     category: req.body.category,
   });
 
   return res.status(201).json({ message: "Barbados me Zanda Gadenge" });
 }


 exports.getallProducts = async(req , res)=>{
    const allProucts = await UserModel.find({})
 
    return res.json(allProucts)
 }


 exports.getById = async(req , res)=>{
    const product = await UserModel.findById(req.params.id)
   
    return res.json(product)
   }


   exports.updateProduct = async(req , res)=>{
    const updatedProduct = await UserModel.findByIdAndUpdate(req.params.id , req.body)
    return res.json(updatedProduct)
  }

  exports.deleteProduct = async(req , res)=>{
    const deletedProduct = await UserModel.findByIdAndDelete(req.params.id)
  
    res.json(deletedProduct)
  }