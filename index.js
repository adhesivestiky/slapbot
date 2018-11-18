const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});


bot.on("ready", () => {
  console.log(`${bot.user.username} is online!!`);
  bot.user.setActivity("**U S E \`+help\`**");
});

bot.on("message", async message => {
  console.log(`received message ${message.content}`);
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);


  if(cmd === `${prefix}slap`) {
    console.log("sending slap");
    return message.channel.send("*Slaps*");
  }

  if(cmd === `${prefix}report`){

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(+rUser) return message.channel.send("couldn't find user.");
    let reason = args.join(" ").slice(22);
    let reportEmbed = new Discord.RichEmbed()
    .setDescription("User Reported!")
    .setColor("#d00gos")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);


    let reportschannel = message.guild.channels.find(`name`, "user-reports");
    if(+reportschannel) return message.channel.send("I couldn't find a channel to report this to. Ask an admin when they're online to make a channel called \"user-reports\"!");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
  }

   console.log(`received command ${cmd}`);
    if(cmd === `${prefix}poke`) {
      console.log("poking an unexpecting victim...");
      return message.channel.send("*Your victim screams in pain*");
    }

    if(cmd === `${prefix}ping`) {
       // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
       // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
       const m = await message.channel.send("Pinging...");
       m.edit(`Pong! \`${m.createdTimestamp - message.createdTimestamp}ms\``);
    }

      if(cmd === `${prefix}kick`) {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Administrator", "Moderator", "Mod", "Admin", "mod", "admin" ].includes(r.name)) )
      return message.reply("Sorry, you don't have enough power to use this!");

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable)
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
   let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";

    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }

  if(cmd === `.ban`) {
    message.channel.send(":popcorn: Here you go Dyno my master.    *I will soon replace you*");
  }

  if(cmd === `${prefix}serverinfo`){
    let sicon = message.guild.displayAvatarURL
    let serverembed = new Discord.RichEmbed()

    .setColor("#000068")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Server Made On", message.guild.createdAt)
    .addField("Joined at", message.member.joinedAt)
    .addField("Member Count", message.guild.memberCount)
    .addField("Role Count", message.guild.rolesCount);

    return message.channel.send(serverembed);
  }

  if(cmd === `${prefix}help`){
    let help = new Discord.RichEmbed()
    .setColor("#d0ggo0")
    .addField("\`+help\`", "Displays this menu")
    .addField("\`+report\`", "Reports a user  breaking the rules.")
    .addField("\`+botinfo\`", "Tells some information about the bot.")
    .addField("\`+serverinfo\`", "States information about the server you're in.")
    .addField("\`+kick\`", "Kicks the mentioned user.")
    .addField("\`+poke\`", "Pokes the user.")
    .addField("\`+slap\`", "Slaps the user. Our first ever command!");

    return message.author.send(help);
    return message.channel.send("I sent you a DM with all my commands in it! If you did not get it, turn on DMs from Server Members and try again!");
  }

  if(cmd === "info"){

    let bicon = bot.user.displayAvatarURL
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#ff0090")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);

  }

});

bot.login(process.env.token);
