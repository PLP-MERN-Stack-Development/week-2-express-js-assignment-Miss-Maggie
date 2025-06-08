require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const logger = require('./middleware/logger');
const mongoose = require('mongoose');

// Replace with your MongoDB URI
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World👋');
});

// Middleware
app.use(bodyParser.json());
app.use(logger);

// Use routes
app.use('/products', productRoutes);

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
