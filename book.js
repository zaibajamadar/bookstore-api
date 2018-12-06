const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({  
  title: String,
  description: String,
  author: String,
  publishedYear: String
});
module.exports = mongoose.model('Book', BookSchema);