const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../money.json");

module.exports.run = async (bot, message, args) => {
 if(!coins[message.author.id]){
  return message.reply("You don't even ***have*** any money... **NOTE**: Money resets when the bot gets updated and at this end, it gets updated a lot. Some users are important so they get their money saved however :3");
 }
 
 let pUser = 
 
}

module.exports.help = {
 name: "give"
}
