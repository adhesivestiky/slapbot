
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) message.channel.reply("You can't do that");
  const sayMessage = args.join(" ");
  let chat = message.guild.channels.find(`name`, "main-lobby");
  
  chat.send(sayMessage);

}

module.exports.help = {
  name: "lobby"
}
