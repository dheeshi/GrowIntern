const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  slug: String,
  description: String,
  // other fields
});

module.exports = mongoose.model('Product', productSchema);