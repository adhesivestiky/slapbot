const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let person = message.mentions.members.first() || message.guild.members.get(args[0]);
 if(!person){
  person = message.author
 };
 //define before embed
 let userAvatar = person.displayAvatarURL;
 let userCreated = person.createdAt;
 let embed = new Discord.RichEmbed()
 
 .setTitle(`Info of ${person.tag}`, userAvatar)
 .setColor("#0fff00")
 .addField("Created on", userCreated)
 .addField("i'm tired", "more soon?");
 
 message.channel.send(embed);
}

module.exports.help = {
  name: "whois"
}
