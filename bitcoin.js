module.exports.bitcoin = {
  execute(message) {
    var axios = require("axios").default;
    var options = {
      method: 'GET',
      url: 'https://coingecko.p.rapidapi.com/simple/price',
      params: {ids: 'bitcoin', vs_currencies: 'usd'},
      headers: {
        'x-rapidapi-key': 'cabbd638damsh8bc1ed6e5ab5f83p12bb20jsna647ab8f601d',
        'x-rapidapi-host': 'coingecko.p.rapidapi.com'
      } 
    };
    async function bitcoinPrice(){
      var data = await axios.get(options.url, options);
      message.reply(`bitcoin price is ${data.data.bitcoin.usd}`);
    }
    bitcoinPrice()
  }
};