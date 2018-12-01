const Discord = require("discord.js");
const fs = require("fs");
let hp = require("../health.json");

module.exports.run = async (bot, message, args) => {
  if(message.member.roles.find(`name`, "Explosives")){
    let user = message.mentions.members.first() || message.guild.members.get(args[0]); 
    let bomb = message.guild.roles.find(`name`, 'Explosives');
    let amount = Math.floor(Math.random() * 30);
    let accuracy = '.';
    //accuracy levels
    if(amount == 0){
      accuracy = `You miss and deal no damage.`
    } else if(amount > 0 < 10){
      accuracy = `You barely hit ${user}, dealing ${amount} damage to them. They now have ${hp[user.id].health - amount}/100 health left.`
    } else if(amount > 11 < 20){
      accuracy = `A decent hit. You dealt ${amount} damage with it!`
    } else {
      accuracy = `A direct hit, dealing ${amount} damage!`
    };
  
      hp[user.id] = {
        health: hp[user.id].health - amount
      };
      
      message.member.removeRole(bomb);
      message.channel.send(`You throw some explosives. ${accuracy}`);

    fs.writeFile("./health.json", JSON.stringify(health), (err) => {
      if(err) console.log(err)
    });
  } else {
   message.channel.send("Buy explosives from the shop to use this!");
  };
}

module.exports.help = {
  name: "explode"
  }
