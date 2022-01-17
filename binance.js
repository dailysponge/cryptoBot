module.exports.binancecoin = {
    execute(message) {
      var axios = require("axios").default;
      var options = {
        method: 'GET',
        url: 'https://coingecko.p.rapidapi.com/simple/price',
        params: {ids: 'binancecoin', vs_currencies: 'usd'},
        headers: {
          'x-rapidapi-key': 'cabbd638damsh8bc1ed6e5ab5f83p12bb20jsna647ab8f601d',
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