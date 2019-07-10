const rateLimit = require('express-rate-limit');

const shortenLimiter = rateLimit({
  windowMs: 1000 * 60 * 60 * 24,
  max: 3,
  message: `You've exhausted your daily limit. Please try again later`
});

module.exports = shortenLimiter;
