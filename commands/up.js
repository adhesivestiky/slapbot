
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      let days = Math.floor(bot.uptime / 86400000);
      let hours = Math.floor(bot.uptime / 3600000) % 24;
      let minutes = Math.floor(bot.uptime / 60000) % 60;
      let seconds = Math.floor(bot.uptime / 1000) % 60;

      message.channel.send(`**Uptime:** ${days}d ${hours}h ${minutes}m ${seconds}s`);
}

module.exports.help = {
  name: "up"
}
