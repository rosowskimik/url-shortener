const mongoose = require('mongoose');

const UrlSchema = mongoose.Schema({
  baseUrl: String,
  longUrl: String,
  code: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('url', UrlSchema);
