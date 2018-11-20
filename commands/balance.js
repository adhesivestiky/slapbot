const Discord = require("discord.js");
let money = require("../money.json");

module.exports.run = async (bot, message, args) => {
  
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!member){
    member = message.author
  };
  
 if(!money[member.id]){
    money[member.id] = {
      money: 0
    };
  }
  
  let uCash = money[member.id].money;
  
  let cEmbed = new Discord.RichEmbed()
  .setAuthor(`${message.author.username}'s Balance:`)
  .setColor("#00ff00")
  .addField(`${message.author.tag} haaaaaaas...`, `${uCash} money!`)
  
  message.channel.send(cEmbed);
  
}

module.exports.help = {
  name: "balance"
}
