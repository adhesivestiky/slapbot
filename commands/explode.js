const Discord = require("discord.js");
const fs = require("fs");
let hp = require("../health.json");

module.exports.run = async (bot, message, args) => {
  if(!message.member.roles.find(`name`, "Explosives")){
    let user = message.mentions.members.first() || message.guild.members.get(args[0]); 
    let bomb = message.guild.roles.find(`name`, 'Explosives');
    let amount = Math.floor(Math.random() * 30);
  
      hp[user.id] = {
        money: hp[user.id].health - amount
      };
      
      message.member.removeRole(bomb);

    fs.writeFile("./money.json", JSON.stringify(money), (err) => {
      if(err) console.log(err)
    });
  };
}

module.exports.help = {
  name: "explode"
  }
