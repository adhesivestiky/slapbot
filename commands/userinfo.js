const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

     let user = args.join(" ");
	  if(!user){
    user = message.author
   };
    const users = message.guild.users.array();
    const matches = users.filter(user => user.name.toLowerCase().includes(args.join(" ").toLowerCase())) 
          user = matches[0];
	  if(matches.length === 1) {

 let member = message.guild.member(user);
 let embed = new Discord.RichEmbed()
 
 .setAuthor(`User Info`, member.displayAvatarURL)
 .setDescription(`<@${member.id}>'s information`)
 .setColor(`${member.displayColor}`)
 .addField("Roles", member.roles.map(roles => roles.name).join(', '))
 .addField("Last message sent", member.lastMessage)
 .addField("Current Status", `Game: ${member.presence.game} (Null = No Game) \n Status: ${member.presence.status}`)
 .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL)
 .setTimestamp();

 
 message.channel.send(embed);
       
       } else {
    if(matches.length === 0) message.reply("couldn't find any users.");
    if(matches.length >= 2) {
       let failembed = new Discord.RichEmbed()
       .setColor('#db0000')
       .setAuthor('Failed:', 'https://cdn.discordapp.com/attachments/516507779738107919/519344315672166429/unknown.png')
       .setDescription(`**Too many users:**/n${matches.join("\n")}`);       
       
       message.channel.send(failembed);
	 };
       };
}

module.exports.help = {
  name: "userinfo"
}
