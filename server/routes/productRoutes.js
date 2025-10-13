// routes/productRoutes.js
const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// إضافة منتج جديد
router.post('/add', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json({ message: '✅ Product added', product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// عرض كل المنتجات
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
