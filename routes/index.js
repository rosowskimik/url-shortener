const express = require('express');
const router = express.Router();

const Url = require('../models/Url');

// @route						GET /:code
// @desc						Get full url
router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });
    if (url) {
      res.json(url);
    } else {
      res.status(404).json('Incorrect code');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

module.exports = router;
