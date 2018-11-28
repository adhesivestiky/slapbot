const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let days = Math.floor(bot.uptime / 86400000);
 let hours = Math.floor(bot.uptime / 3600000) % 24;
 let minutes = Math.floor(bot.uptime / 60000) % 60;
 let seconds = Math.floor(bot.uptime / 1000) % 60;
 
 let energy = "Boop.";

 
//note to self: define stuff BEFORE the definition for the embed

 let embed = new Discord.RichEmbed()
 
 .setTitle("Support Server")
 .setAuthor("Bot Info/Stats", "https://cdn.discordapp.com/avatars/501207321087836161/c75271b960d592b84f9fc54a522f19d8.png?size=2048")
 .setURL("https://discord.gg/yANQDJJ")
 .setThumbnail(bot.user.displayAvatarURL)
 .setColor("#000fff")
 .addField("Bot Info", "This, Blob, AKA Slap Bot, is a project made by me and only me (adhesivestiky#4719). I'm making this bot for my server, and for the challenge of learning a new skill. Hope you like it!")
 .addField("Uptime", `${days} days, ${hours} hrs, ${minutes} min, and ${seconds} sec.`)
 .addField("Server Count", bot.guilds.size)
 .addField("Users", bot.users.size)
 .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL)
 .setTimestamp();
 
 message.channel.send(embed);
}

module.exports.help = {
 name: "info"
}
