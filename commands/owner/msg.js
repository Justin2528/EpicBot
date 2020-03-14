const Discord = require('discord.js');
let ok1 = require("../../boop.json");
module.exports = {
    name: "msg",
    category: "owner",
    description: "msg",
     usage: "idk",
 aliases: ["message"],
    run: async (client, message, args,ops,guildconf,dsettings) => {
    if (message.author.id !== "386490806716071946") return message.channel.send("Only owners can use this command")
 let ok = args[0]
let ok2 = client.users.get(ok).send(args.slice(1).join(" ")).then(message.channel.send("Sended!").catch(err => console.log(err))) 
     
   
    }
}
