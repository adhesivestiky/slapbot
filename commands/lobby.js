
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const sayMessage = args.join(" ");
  let chat = message.guild.channels.find(`name`, "main-chat");
  
  message.chat.send(sayMessage);

}

module.exports.help = {
  name: "lobby"
}
