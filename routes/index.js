const express = require('express');
const router = express.Router();

const Url = require('../models/Url');

// @route						GET /api
// @desc						Get 5 newest urls
router.get('/', async (req, res) => {
  try {
    const url = await Url.find()
      .limit(5)
      .sort('-date')
      .select('-__v -date');
    res.json(url);
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

// @route						GET /api/:code
// @desc						Get full url
router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code }).select(
      'longUrl'
    );
    if (url) {
      res.redirect(url.longUrl);
    } else {
      res.status(404).json('Incorrect code');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

module.exports = router;
