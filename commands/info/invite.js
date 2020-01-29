const Discord = require('discord.js');
module.exports = {
    name: "invite",
    category: "info",
    description: "Invite the bot",
 
    run: async (client, message, args,ops) => {
let embed = new Discord.RichEmbed()
.setDescription("[INVITE](https://discordapp.com/oauth2/authorize?client_id=667975393495613442&scope=bot&permissions=2084007120)");
      message.channel.send(embed)

    }
}
