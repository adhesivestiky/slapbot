
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let health = JSON.parse(fs.readFileSync("./health.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.roles.some(r=>["In possesion of a banana"].includes(r.name)) )
  return message.reply("Buy a banana from the Shopkeeper to do this!");
  let wUser = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!wUser) return message.reply("Specify a member of this server");

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 100
  };

  health[wUser.id].warns++;

  fs.writeFile("./health.json", JSON.stringify(health), (err) => {
    if (err) console.log(err);
  });

  let hpembed = new Discord.RichEmbed()

    .setAuthor(message.author.username)
    .setColor("#00ff00")
    .addField("User who ate the banana", wUser.tag)
    .addField("Ate in", message.channel)
    .addField("Health", health[wUser.id].health)


    message.channel.send(hpembed);


}

module.exports.help = {
  name: "eat-banana"
}
