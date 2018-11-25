const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let user = message.mentions.members.first() || message.guild.members.get(args[0]);
 if(!user){
  user = message.author
 };
 //define before embed
 const member = message.guild.member(user);
 let userAvatar = user.displayAvatarURL;
 let userCreated = user.createdAt;
 let embed = new Discord.RichEmbed()
 
 .setAuthor(`Info of ${user.username}#${user.discriminator}`, userAvatar)
 .setColor("#0fff00")
 .addField("Status", user.presence.status, true)
 .addField("Roles", member.roles.map(roles => roles.name).join(', '), true)
 .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL)
 .setTimestamp();

 
 message.channel.send(embed);
}

module.exports.help = {
  name: "whois"
}
