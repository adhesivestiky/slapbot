const Discord = require("discord.js");
const fs = require("fs");
let money = require("../money.json");

module.exports.run = async (bot, message, args) => {

  let item = args.join(" ").slice(22);
  
  if(!item) return message.reply("Specify a role please.");
  
  if(item == "banana"){
    let banana = message.guild.roles.find(`name`, "Banana");
    if(!banana) return message.reply("This server does not have a role named 'Banana'. Ask an admin to create one for you if you want this feature!");

    if(message.author.roles.has(banana.id)){
      message.channel.send("But you already have a banana...");
    }
    
    await(message.author.addRole(banana.id));
    
    money[message.author.id] = {
      money: money[message.author].money - 30
    };
  };
  
  if(item == "bombs" || "explosives"){
    let bomb = message.guild.roles.find(`name`, "Banana");
    if(!bomb) return message.reply("This server does not have a role named 'Explosives'. Ask an admin to create one for you if you want this feature!");

    if(message.author.roles.has(bomb.id)){
      message.channel.send("But you already have explosives...");
    };
    
    await(message.author.addRole(bomb.id));
    
    money[message.author.id] = {
      money: money[message.author].money - 40
    };
  };
    
  fs.writeFile("./money.json", JSON.stringify(money), (err) => {
    if(err) console.log(err)
  });

  message.channel.send("Item purchased!");    
}

module.exports.help = {
  name: "buy"
