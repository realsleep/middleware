var express = require('express');
var router = express.Router();
const https = require('https');
  
/* GET home page. */
router.get('/', function(req, res, next) {
  let options = {
    port: 443,
    method: 'GET',
    key: fs.readFileSync('../key.pem'),
    cert: fs.readFileSync('../cert.pem'),
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

  options.agent = new https.Agent(options);
  const request = https.request(options, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data = data + chunk.toString();
      });

      response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
      });
  });

  request.on('error', (error) => {
    console.log('An error', error);
  });

  request.end();
});

module.exports = router;
