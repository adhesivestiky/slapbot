const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let user = message.mentions.members.first() || message.guild.members.get(args[0]); 
 if(!user){
  user = message.author
 };
 
 const member = message.guild.member(user);
 let embed = new Discord.RichEmbed()
 
 .setAuthor(`User Info`, member.displayAvatarURL)
 .setDescription(`<@${member.id}>'s information`)
 .setColor("#0fff00")
 .addField("Roles", member.roles.map(roles => roles.name).join(', '))
 .addField("Last message sent", member.lastMessage)
 .addField("Current Status", `Game: ${member.presence.game} (Null = No Game) \n Status: ${member.presence.status}`)
 .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL)
 .setTimestamp();

 
 message.channel.send(embed);
}

module.exports.help = {
  name: "userinfo"
}
