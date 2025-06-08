const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth');
const validateProduct = require('../middleware/validateProduct');

// GET all
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// GET by ID
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// POST - protected and validated
router.post('/', auth, validateProduct, async (req, res, next) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
});

// PUT - protected and validated
router.put('/:id', auth, validateProduct, async (req, res, next) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Product not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

// DELETE - protected
router.delete('/:id', auth, async (req, res, next) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
