const Discord = require('discord.js')
const BitcoinBot = require('./bitcoin')
const BinanceBot = require('./binance')
const client = new Discord.Client()
const fs = require('fs');
const { executionAsyncResource } = require('async_hooks');
const { runInContext } = require('vm');
const { execute } = require('./bitcoin');
client.commands = new Discord.Collection();

client.on('ready', () => {
    console.log('Bot is now connected')
    client.channels.cache.find(channel => channel.name === 'general').send("Hi, i support binancecoin and bitcoin. !bitcoinprice for btc and !binanceprice for bnb"); 
});
client.on('message', async message => {
    if(message.content === '!bitcoinprice') {
        BitcoinBot.bitcoin.execute(message)
    }
    else if (message.content === '!binanceprice'){
        BinanceBot.binancecoin.execute(message)
    }

});
client.login('ODExMjM4ODA5MDQzMjA2MjA3.YCvTBA.qmYRNZa2zDbW0fc8C8l5PTULyBw')