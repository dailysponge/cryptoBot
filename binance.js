module.exports.binancecoin = {
    execute(message) {
      var axios = require("axios").default;
      var options = {
        method: 'GET',
        url: 'https://coingecko.p.rapidapi.com/simple/price',
        params: {ids: 'binancecoin', vs_currencies: 'usd'},
        headers: {
          'x-rapidapi-key': 'YOUR_KEY',
          'x-rapidapi-host': 'coingecko.p.rapidapi.com'
        } 
      };
      async function binancecoinPrice(){
        var data = await axios.get(options.url, options);
        message.reply(`binancecoin price is ${data.data.binancecoin.usd}`);
      }
      binancecoinPrice()
    }
  };
