const Discord = require('discord.js');
module.exports = {
    name: "kill",
    category: "fun",
    description: "kill something",
    usage: "something or someone or anything",
    run: async (client, message, args,ops,guildconf,dsettings) => {
let deaths = ["has been stabbed by EpicBot", "has fall to their death irl", "has drunk to many water and died", `was stabbed by ${args[0]} for some reason`, "has what too many time and was stabbed by some random boomer", "died", "somehow died", "died because of some kid keep posting cringe video."]
let death = deaths[Math.floor(Math.random() * deaths.length)]
       if (args[0] === "epicbot") return message.channel.send("No");
    if (args[1] === "epicbot") return message.channel.send("No");
    if (args[2] === "epicbot") return message.channel.send("No");
    if (args[0] === "EpicBot") return message.channel.send("No");
    if (args[1] === "EpicBot") return message.channel.send("No");
    if (args[2] === "EpicBot") return message.channel.send("No");
    if (args[0] === "EPICBOT") return message.channel.send("No");
    if (args[1] === "EPICBOT") return message.channel.send("No");
    if (args[2] === "EPICBOT") return message.channel.send("No");
      if(args[0] === "epic" && args[1] === "bot") return message.channel.send("No");
     if(args[1] === "epic" && args[2] === "bot") return message.channel.send("No");
    if(args[0] === "Epic" && args[1] === "Bot") return message.channel.send("No");
     if(args[1] === "Epic" && args[2] === "Bot") return message.channel.send("No");
    if(args[0] === "EPIC" && args[1] === "BOT") return message.channel.send("No");
     if(args[1] === "EPIC" && args[2] === "BOT") return message.channel.send("No");
    message.channel.send(`${args[0]} ${death}.`)
    }
}
