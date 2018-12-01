const Discord = require("discord.js");
let hp = require("../health.json");

module.exports.run = async (bot, message, args) => {
  
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!member){
    member = message.author
  };
  
 if(!hp[member.id]){
    hp[member.id] = {
      health: 100
    };
  };
  
  let uHp = hp[member.id].health;
  
  let uAvatar = message.author.displayAvatarURL;
  let hpEmbed = new Discord.RichEmbed()
  .setColor("#00ff00")
  .setDescription(`<@${member.id}> **has...** \n${uHp} money!`)
  .setFooter(`Requested by ${message.author.tag}`, uAvatar)
  .setTimestamp();
  
  message.channel.send(hpEmbed);
  
}

module.exports.help = {
  name: "hp"
}
