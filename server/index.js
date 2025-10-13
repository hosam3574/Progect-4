const express =require('express');
const connectDB =require('./config/db');
const dotenv=require('dotenv');

dotenv.config();

connectDB();

const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');


const app = express()

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
