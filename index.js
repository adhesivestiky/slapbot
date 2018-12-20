const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
let money = require("./money.json");
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("couldn't find commands");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded...`);
    bot.commands.set(props.help.name, props);

  });
});



bot.on("ready", () => {
  console.log(`${bot.user.username} is online on these servers: ${bot.guilds.map(g => g.name)}!!`);
  bot.user.setActivity(`With ${bot.users.size} users | .help`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if (!message.content.startsWith(".")) return;
  if(message.author.id == '482191517662838789'){
    message.channel.send('Not for you I won\'t. You\'re ***blacklisted***!');
  };
  
  if(!money[message.author.id]){
    money[message.author.id] = {
      money: 0
    };
  }
  
  let moneyAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  
  if(moneyAmt === baseAmt){
    money[message.author.id] = {
      money: money[message.author.id].money + moneyAmt + baseAmt
    };
    
    fs.writeFile("./money.json", JSON.stringify(money), (err) => {
      if (err) console.log(err)
    });
  }
  
  let prefix = ".";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);


  
    if(cmd === `yay`) {
     message.channel.send("m?");
    };

  });

bot.on('guildMemberAdd', member => {
  if(member.guild.id === '439957432320524299'){
  const channel = member.guild.channels.find(ch => ch.name === 'lobby');
  // Do nothing if the channel wasn't found on this server
  if(!channel) return;
  // Send the message, mentioning the member
  member.addRole(member.guild.roles.find(`name`, 'Member'));
  channel.send(`Welcome to ${member.guild.name}, ${member}! Please read <#524730641661820938>, and move on from there!`);
  };
});



bot.login(process.env.token);
