var express = require('express');
var router = express.Router();
const https = require('http');
const fs = require('fs');

  
/* GET home page. */
router.get('/', function(req, res, next) {
  let options = {
    port: 80,
    method: 'GET',
  };

  if (req.query.account == 'id4' || req.query.account == 'id5') {
    options['hostname'] = 'oldpayments.ala-laundry.com'
    if (req.query.command == 'check') {
      options['path'] = `/kaspi/payment?command=check&txn_id=${req.query.txn_id}&account=${req.query.account}`;            
    } else {
      options['path'] = `/kaspi/payment?command=check&txn_id=${req.query.txn_id}&account=${req.query.account}`;
    }
  } else {
    options['hostname'] = 'newpayments.ala-laundry.com';
    if (req.query.command == 'check') {
      options['path'] = `/kaspi/payment?command=check&txn_id=${req.query.txn_id}&account=${req.query.account}`;
    } else {
      options['path'] = `/kaspi/payment?command=check&txn_id=${req.query.txn_id}&account=${req.query.account}`;
    }
  }

  const request = https.request(options, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data = data + chunk.toString();
      });

      response.on('end', () => {
        const body = JSON.parse(data);
        res.json(body);
      });
  });

  request.on('error', (error) => {
    console.log('An error', error);
  });

  request.end();
});

module.exports = router;
