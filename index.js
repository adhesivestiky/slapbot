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
  bot.user.setActivity("at ReThink's house");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if (!message.content.startsWith(".")) return;
  
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
     message.channel.send("<a:518507296943243300:>");
    }

  });


bot.login(process.env.token);
