const express = require('express');
const router = express.Router();

router.get('/crawling', (req, res) => {
    const responseData = { message: 'hello stock' };
    res.json(responseData);
  });

module.exports = router;