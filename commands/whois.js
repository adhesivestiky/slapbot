const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let user = message.mentions.members.first();
 if(!user){
  user = message.author
 };
 
 let b = "boop";
 
 if(user = message.author){
  b = message.author.tag;
 };
 
if(!user = message.author){
 b = "{I'm having trouble tagging other members}";
};

 const member = message.guild.member(user);
 let userAvatar = user.displayAvatarURL;
 let userCreated = user.createdAt;
 let embed = new Discord.RichEmbed()
 
 .setAuthor(`Info of ${b}`, member.displayAvatarURL)
 .setColor("#0fff00")
 .addField("Status", user.presence.status)
 .addField("Roles", member.roles.map(roles => roles.name).join(', '))
 .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL)
 .setTimestamp();

 
 message.channel.send(embed);
}

module.exports.help = {
  name: "whois"
}
