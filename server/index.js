const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const Product = require('./models/Product');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// إضافة منتج
app.post('/api/products/add', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json({ message: '✅ Product added successfully', product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// جلب كل المنتجات
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// جلب منتجات حسب الفئة
app.get('/api/products/category/:category', async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// تقديم ملفات الواجهة
app.use(express.static(path.join(__dirname, '../client')));

// اتصال MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error(err));

// تشغيل السيرفر على بورت آمن
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
