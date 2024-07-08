require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productRoutes = require('./Routes/productRoute.js');
const userRoutes = require('./Routes/userRoute');
app.use(express.json()); // this is use as the middleware


mongoose.connect(process.env.mongoUrl)
.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) =>{
    console.log('Error connecting to MongoDB',err);
})
app.use(productRoutes);
app.use(userRoutes);

app.listen(3002, () => {
    console.log('Server is running on port 3002');
});