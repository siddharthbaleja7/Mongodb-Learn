const express = require('express')
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/api/user", userController.createProduct);

// get route

router.get("/api/user", userController.getallProducts);

// Get product by id

router.get("/api/user/:id", userController.getById);

// Update product

router.put("/api/user/:id", userController.updateProduct);

/// Delete 

router.delete("/api/user/:id", userController.deleteProduct);
module.exports = router
