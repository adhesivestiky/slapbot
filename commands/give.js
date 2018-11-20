const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../money.json");

module.exports.run = async (bot, message, args) => {
 if(!coins[message.author.id]){
  return message.reply("You don't even ***have*** any money... **NOTE**: Money resets when the bot gets updated and at this end, it gets updated a lot. Some users are important so they get their money saved however :3");
 }
 
 let pUser = message.mentions.members.first() || message.guild.members.get(args[0]);
 let pCoins = coins[pUser.id].coins;
 let sCoins = coins[message.author.id].coins
 
 if(sCoins < args[0]) return message.repy("You don't have enough money... feelsbadman");
 
 coins[message.author.id] = {
  coins: sCoins - parseInt(args[1])
 };
 
 coins[pUser.id] = {
  coins: pCoins + parseInt(args[1])
 };
 
 message.channel.send("Money transfer complete!");
 
 fs.writeFile("./money.json", JSON.stringify(coins), (err) => {
  if(err) console.log(err)
 });
 
}

module.exports.help = {
 name: "give"
}
