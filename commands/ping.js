const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const ping = await message.channel.send("Pinging...");
  const load = await ping.edit(`Loading embed...`);
  
  let pingembed = new Discord.RichEmbed()
  .setTitle('Pong!')
  .setDescription(`**Response time:** \`${ping.createdTimestamp - load.createdTimestamp}ms\`\n**Bot ping:** \`${Math.round(bot.ping)}ms\``)
  .setThumbnail(`Panged by ${message.author.tag}`, message.author.displayAvatarURL)
  .setTimestamp();

  ping.delete();
  message.channel.send(pingembed);
}
module.exports.help = {
  name: "ping"
}
