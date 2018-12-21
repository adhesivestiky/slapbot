const Discord = require("discord.js");
const Info = reqiure("../package.json");

module.exports.run = async (bot, message, args) => {
  let dev = "Developer commands are not shown to the public.";
  if(message.author.id == '306287412437450753'){
    dev = "These are commands you can use: \n\`.eval [code]\` \nThis runs a bit of code you type"
  };
  let menuembed = new Discord.RichEmbed()
  .setTitle('This is Blob II.')
  .setDescription('React with \'🎋\' to see the entertainment menu')
  .setColor('#4286f4')
  .setFooter(`Version ${Info.version}.`)
  .setTimestamp();
  
  const menu = await message.channel.send(menuembed);
  menu.react('🎋');
  if(message.reaction.name === '🎋' && message.reaction.count === '2'){
    let funmenu = new Discord.RichEmbed()
    .setTitle('**ENTERTAINMENT COMMANDS**')
    .setColor('#4286f4')
    .addField('\`.balance [user]\`', 'Checks the given user\'s balance. Gives yours if no user. **Money is earned by typing. The more active you are, the more you earn.**')
    .addField('\`.give <user> <amount>\`', 'Gives the given user a given amount of money and subtracts it from your balance.')
    .addField('\`.shop\`', 'Displays the items you can buy'.)
    .addField('\`.buy <item>\`', 'Buys a specific item.')
    .addField('\`.explode <user>\`', 'Takes some of a user\'s health away.')
    .addField('\`.hp <user>\`', 'Checks a user\'s health, yours if none.')
    .addField('\`.inv\`', 'Fact-telling command.');
    menu.edit(funmenu);
  };
  
}

module.exports.help = {
  name: "help"
}
