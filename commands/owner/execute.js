const Discord = require('discord.js');
let ok1 = require("../../boop.json");
const exec = require('child_process').exec;
module.exports = {
    name: "execute",
    category: "owner",
    description: "e",

    run: async (client, message, args,ops,guildconf,dsettings) => {

    if (message.author.id !== "386490806716071946") return message.channel.send("Only owners can use this command")
  if(!args[0])return message.channel.send("Executed Air")
    exec(`${args.join(' ')}`, (error, stdout) => {
      const response = (error || stdout);
      message.channel.send(`Ran: ${args.join(" ")}\n${response}`, {code: "asciidoc", split: "\n"}).catch(console.error);
     
    });
   
    }
}
