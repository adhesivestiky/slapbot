const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  let health = JSON.parse(fs.readFileSync("./health.json", "utf8"));
  let hpUser = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!hpUser) return message.reply("Specify a member of this server. Yeah, you have to mention yourself for this.");

  if(!health[hpUser.id]) health[hpUser.id] = {
    health: 100
  }


  fs.writeFile("./health.json", JSON.stringify(health), (err) => {
    if (err) console.log(err);
  });
  
  message.channel.send(`${hpUser}'s health: ${health[hpUser.id]}`);


    }

module.exports.help = {
  name: "hp"
}
