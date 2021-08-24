var express = require('express');
var router = express.Router();

const {getPrices} = require("../controller/pricesController")

router.get('/',getPrices);

module.exports = router;
