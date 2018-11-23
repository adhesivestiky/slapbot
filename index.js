const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
let money = require("./money.json");
let prefix = '.';

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
  console.log(`${bot.user.username} is online!!`);
  bot.user.setActivity("with ReThink (below below below)'s insides");
});

bot.on("message", async message => {
  console.log(`received message ${message.content} from ${message.author.tag}`);
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if(message.content.slice(prefix.length) !== prefix) return;
  
  if(!money[message.author.id]){
    money[message.author.id] = {
      money: 0
    };
  }
  
  let moneyAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  
  if(moneyAmt === baseAmt){
    money[message.author.id] = {
      money: money[message.author.id].money + moneyAmt
    };
    
    fs.writeFile("./money.json", JSON.stringify(money), (err) => {
      if (err) console.log(err)
    });
  }
  
  let prefix = botconfig.prefix
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);



    if(cmd === `${prefix}slap`) {
      message.channel.send("*Slaps*");
    }

  });


bot.login(process.env.token);
