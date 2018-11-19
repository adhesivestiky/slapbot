const Discord = require("discord.js");
const fs = require("fs");
let health = JSON.parse(fs.readFileSync("./health.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.roles.some(r=>["Has Explosives"].includes(r.name)) )
  return message.reply("You need to buy explosives via the Shopkeeper to use this");
  let hpUser = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!hpUser) return message.reply("Specify a member of this server");

  if(!health[hpUser.id]) health[hpUser.id] = {
    warns: 100
  };

  health[hpUser.id].warns--;

  fs.writeFile("./health.json", JSON.stringify(health), (err) => {
    if (err) console.log(err);
  });
  
  message.channel.send(`${hpUser} was blown up by ${message.author}. Rip.`);


}

module.exports.help = {
  name: "explode"
}
