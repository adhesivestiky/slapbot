const Discord = require("discord.js");
const fs = require("fs");
let money = require("../money.json");

module.exports.run = async (bot, message, args) => {

  let item = args.join(" ");
  
  if(!item) return message.reply("Specify an item please.");
  
  if(item == "banana"){
    let banana = message.guild.roles.find(`name`, "Banana");
    if(!banana) return message.reply("This server does not have a role named 'Banana'. Ask an admin to create one for you if you want this feature!");
    if(money[message.member].money <= 0){
      message.channel.send("You cannot purchase items when you are in debt!");
    };
    
    await(message.member.addRole(`${banana.id}`));
    
    money[message.member.id] = {
      money: money[message.member.id].money - 40
    };
  };
  
  if(item == "bombs" || "explosives"){
    let bomb = message.guild.roles.find(`name`, "Explosives");
    if(!bomb) return message.reply("This server does not have a role named 'Explosives'. Ask an admin to create one for you if you want this feature!");
    if(money[message.member].money <= 0){
      message.channel.send("You cannot purchase items when you are in debt!");
    };
    
    await(message.member.addRole(`${bomb.id}`));
    
    money[message.member.id] = {
      money: money[message.member.id].money - 30
    };
  };
    
  fs.writeFile("./money.json", JSON.stringify(money), (err) => {
    if(err) console.log(err)
  });

  message.channel.send("Item purchased!");    
}

module.exports.help = {
  name: "buy"
  }
