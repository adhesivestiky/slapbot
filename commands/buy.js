const Discord = require("discord.js");
const fs = require("fs");
let money = require("../money.json");

module.exports.run = async (bot, message, args) => {

  let item = args.join(" ").slice(22);
  
  if(!item) return message.reply("Specify a role please.");
  
  if(item == "banana"){
    let banana = message.guild.roles.find(`name`, "Banana");
    if(!banana) return message.reply("This server does not have a role named 'Banana'. Ask an admin to create one for you if you want this feature!");

    if(rMember.roles.has(banana.id)){
      message.channel.send("But you already have a banana...");
    }
    
    await(message.author.addRole(banana.id));
    
    money[message.author.id] = {
      money: message.author - 30
    };
  };
  
  if(item == "bombs" || "explosives"){
    let banana = message.guild.roles.find(`name`, "Banana");
    if(!banana) return message.reply("This server does not have a role named 'Explosives'. Ask an admin to create one for you if you want this feature!");

    if(rMember.roles.has(banana.id)){
      message.channel.send("But you already have explosives...");
    };
    
    await(message.author.addRole(banana.id));
    
    money[message.author.id] = {
      money: message.author - 40
    };
  };
    

  message.channel.send("Item purchased!");    
}

module.exports.help = {
  name: "buy"
