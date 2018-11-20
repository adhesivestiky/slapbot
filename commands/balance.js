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
  .setAuthor(`${message.mentions.members.first() || message.guild.members.get(args[0]).username}'s Balance:`)
  .setColor("#00ff00")
  .addField(`${member.tag} haaaaaaas...`, `${uCash} money!`)
  .setFooter(`Requested by ${message.author.tag}, can't remember when.`);
  
  message.channel.send(cEmbed);
  
}

module.exports.help = {
  name: "balance"
}
