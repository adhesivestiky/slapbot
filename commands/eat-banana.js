const Discord = require("discord.js");
const fs = require("fs");
let hp = require("../health.json");

module.exports.run = async (bot, message, args) => {
  if(message.member.roles.find(`name`, "Banana")){
    let user = message.member;
    let banana = message.guild.roles.find(`name`, 'Banana');
    let amount = Math.floor(Math.random() * 25);
    let ripeness = '.';
    if(amount == 0){
      ripeness = `Your banana was rotten, and you didn't heal...`
    } else if(amount > 0 < 10){
      ripeness = `Your banana was barely ripe enough to eat, and healed ${amount}. You now have ${hp[user.id].health + amount}/100 health left.`
    } else if(amount > 11 < 20){
      ripeness = `It was a decent banana. You healed by ${amount}!`
    } else {
      ripeness = `It was the best banana EVER. You gained a whole ${amount} health!`
    };
  
      hp[user.id] = {
        health: hp[user.id].health + amount
      };
      
      message.member.removeRole(banana);
      message.channel.send(`You eat a banana. ${ripeness}`);

    fs.writeFile("./health.json", JSON.stringify(health), (err) => {
      if(err) console.log(err)
    });
  } else {
   message.channel.send("Buy a banana from the shop to use this!");
  };
}

module.exports.help = {
  name: "eat-banana"
  }
