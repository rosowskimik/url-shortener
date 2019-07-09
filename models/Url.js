const mongoose = require('mongoose');

const UrlSchema = mongoose.Schema({
  shortUrl: String,
  longUrl: String,
  urlCode: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('url', UrlSchema);
