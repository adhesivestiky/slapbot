
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const message = args.join(" ");
  let chat = message.guild.channels.find(`name`, "main-chat");
  
  chat.send(message);

}

module.exports.help = {
  name: "lobby"
