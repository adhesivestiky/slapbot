const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

     let user = args.join(" ");
	  if(!user){
    message.channel.send('Specify a user!');
   };
    const Users = message.guild.users.array();
    const matches = Users.filter(user => user.name.toLowerCase().includes(args.join(" ").toLowerCase())) 
          user = matches[0];
	  if(matches.length === 1) {

 let embed = new Discord.RichEmbed()
 
 .setAuthor(`User Info`, user.displayAvatarURL)
 .setDescription(`<@${user.id}>'s information`)
 .setColor(`${user.displayColor}`)
 .addField("Roles", user.roles.map(roles => roles.name).join(', '))
 .addField("Last message sent", user.lastMessage)
 .addField("Current Status", `Game: ${user.presence.game} (Null = No Game) \n Status: ${user.presence.status}`)
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
