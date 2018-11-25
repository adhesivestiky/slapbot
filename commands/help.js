const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let n = "**NOTE:** Money resets when the bot gets updated, and at this beta stage, it gets updated a lot. Apologies for any inconviences this may cause, when the bot reaches a point, updates will be larger and less frequent.";
  let embed = new Discord.RichEmbed()

  .setTitle("Support Server")
  .setAuthor("Help", "https://cdn.discordapp.com/avatars/501207321087836161/c75271b960d592b84f9fc54a522f19d8.png?size=2048")
  .setColor("#00ffff")
  .addField("\`.ping\`", "Tells how fast the bot responds to messages.")
  .addField("\`.help\`", "Displays this menu.")
  .addField("\`.balance [user (optional)]\`", `Displays your cash balance (${n}).`)
  .addField("\`.give [user] [amount]\`", `Give a user a certain amount of coins (${n}).`)
  .addBlankField(true)
  .addField("**MODERATION COMMANDS**", "This includes any command that requires a certain permission to use.")
  .addBlankField(true)
  .addField("\`.lobby [text]\`", "Sends a message in the main channel of Tennessine (link in support server)")
  .setFooter(`Requested by ${message.author.tag}`)
  .setURL("https://discord.gg/yANQDJJ")
  .setTimestamp()
  
  message.author.send(embed);
}

module.exports.help = {
  name: "help"
}
