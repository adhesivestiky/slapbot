const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let shop = new Discord.RichEmbed()
  .setAuthor('Shop')
  .addField("banana", "Gives you a role called \'Banana\' \n**Price:** \`40 money\`")
  .addField("bombs, explosives", "Gives you a role called \'Explosives\' \n**Price:** \`30 money\`")
  .setFooter(`Requested by ${message.author}`, message.author.displayAvatarURL)
  .setTimestamp();
  
  message.channel.send(shop);
}

module.exports.help = {
  name: "shop"
}
