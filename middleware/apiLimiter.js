const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
  windowMs: 1000 * 60 * 15,
  max: 50
});

module.exports = apiLimiter;
