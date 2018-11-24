const Discord = require("discord.js");
const fs = require("fs");
let money = require("../money.json");

module.exports.run = async (bot, message, args) => {
 if(!money[message.author.id]){
  return message.reply("You don't even ***have*** any money... **NOTE**: Money resets when the bot gets updated and at this stage, it gets updated a lot. Some users are important so they get their money saved however :D");
 }
 
 let pUser = message.mentions.members.first() || message.guild.members.get(args[0]);
 let pCoins = money[pUser.id].money
 let sCoins = money[message.author.id].money
 
 if(sCoins < args[0]) return message.reply("You don't have enough money... feelsbadman");
 
 money[message.author.id] = {
  money: sCoins - parseInt(args[1])
 };
 
 money[pUser.id] = {
  money: pCoins + parseInt(args[1])
 };
 
 message.channel.send("Money transfer complete!");
 
 fs.writeFile("./money.json", JSON.stringify(money), (err) => {
  if(err) console.log(err)
 });
 
}

module.exports.help = {
 name: "give"
}
