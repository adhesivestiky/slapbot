const Discord = require("discord.js");
const fs = require("fs");
let money = require("../money.json");

module.exports.run = async (bot, message, args) => {
  //!pay @isatisfied 59345

  if(!money[message.author.id]){
    return message.reply("You don't have any money!")
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!money[pUser.id]){
    money[pUser.id] = {
      money: 0
    };
  }

  let pCoins = money[pUser.id].money;
  let sCoins = money[message.author.id].money;

  if(sCoins < args[0]) return message.reply("Not enough money!");

  money[message.author.id] = {
    money: sCoins - parseInt(args[1])
  };

  money[pUser.id] = {
    money: pCoins + parseInt(args[1])
  };

  message.channel.send(`Transfer of money complete!`);

  fs.writeFile("./money.json", JSON.stringify(money), (err) => {
    if(err) console.log(err)
  });


}

module.exports.help = {
  name: "give"
}
