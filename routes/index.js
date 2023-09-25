var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.query.account == 'id4' && req.query.account == 'id5') {
    res.redirect('https://oldpayments.ala-laundry.com');
  } else {
    res.redirect('https://newpayments.ala-laundry.com');
  }
});

module.exports = router;
