const Discord = require("discord.js");
module.exports = {
    name: "support",
    category: "info",
    description: "get support",

    run: async (client, message, args,ops) => {
let embed = new Discord.RichEmbed()
.setColor("RED")
.setDescription("WARNING: JOIN IF YOU REALLY REALLY NEED HELP [HERE](https://discord.gg/TJHNkR7)");
      message.channel.send(embed)

    }
}
