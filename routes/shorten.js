const express = require('express');
const router = express.Router();
const config = require('config');
const validUrl = require('valid-url');
const shortId = require('shortid');
const shortenLimiter = require('../middleware/shortenLimiter');

const Url = require('../models/Url');

// @route						POST /shorten
// @desc						Create short url
router.post('/shorten', shortenLimiter, async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = config.get('baseURL');

  if (!validUrl.isWebUri(longUrl)) {
    res.status(401).json('Incorrect Url');
  } else {
    try {
      let url = await Url.findOne({ longUrl });

      if (url) {
        res.json(url);
      } else {
        const urlCode = shortId.generate(longUrl);
        const shortUrl = `${baseUrl}/${urlCode}`;

        url = new Url({
          shortUrl,
          longUrl,
          urlCode
        });

        url.save();
        res.json(url);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json('Server error');
    }
  }
});

module.exports = router;
