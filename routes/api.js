var express = require ('express'); 
var router = express.Router(); 
const yahooStockPrices = require('yahoo-stock-prices')
const {Portfolio, Wallet} = require('../lib/models');

//Yahoo stock API
router.get('/search/:symbol', async function(req, res, next) {
    console.log('the req.params', req.params)
    const data = await yahooStockPrices.getCurrentData(req.params.symbol);
    res.json(data)
});

router.get('/portfolio', async function(req, res, next) {
    let items = await Portfolio.findAll({});
    res.json(items);
});

router.post('/portfolio', async function(req, res, next) {
    console.log('.the req.body is', req.body)
    let item = await Portfolio.create(req.body)

    res.json(item)
});

router.delete('/portfolio/:id', function(req, res, next) {
    res.json({deleteRowInTheTable: true})
});

router.get('/test', function(req,result,next){
    result.json ({api:true})
});

module.exports = router;