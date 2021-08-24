const axios = require("axios");

exports.getPrices = function (req, res, next) {
  console.log(req.query)
  const { value1 } = req.query;
  const { value2 } = req.query;
  console.log(value1, value2)

  axios
    .get(
      `https://api.coindesk.com/v1/bpi/historical/close.json?start=${value1}&end=${value2}`
    )
    .then(function (response) {
      console.log(response);
      res.send(response.data.bpi);
      
    })
    .catch(function (error) {
      console.log(error);
    });
};