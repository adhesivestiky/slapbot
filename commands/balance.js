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
  
  let uAvatar = message.author.AvatarURL
  let cEmbed = new Discord.RichEmbed()
  .setColor("#00ff00")
  .setDescription(`<@${member.id}> **has...** \n${uCash} money!`)
  .setFooter(`Requested by ${message.author.tag}`, uAvatar)
  .setTimestamp()
  
  message.channel.send(cEmbed);
  
}

module.exports.help = {
  name: "balance"
}
