var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.query.account == 'id4' && req.query.account == 'id5') {
    if (req.query.command == 'check') {
      res.redirect(`https://oldpayments.ala-laundry.com/kaspi/payment?command=check&txn_id=${req.query.txn_id}&account=${req.query.account}`);
    } else {
      res.redirect(`https://oldpayments.ala-laundry.com/kaspi/payment?command=check&txn_id=${req.query.txn_id}&account=${req.query.account}`);
    }
  } else {
    res.redirect(`https://newpayments.ala-laundry.com`);
  }
});

module.exports = router;
