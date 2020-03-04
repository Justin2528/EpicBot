const Discord = require('discord.js');
module.exports = {
    name: "invite",
    category: "info",
    description: "Invite the bot",
 
    run: async (client, message, args,ops) => {
let ok1 = require("../../boop.json");
        let chance = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let ok2 = ok1.ads
      let ok3 = ok2[Math.floor(Math.random() * ok2.length)]
         if (chance < 30) {
        message.channel.send(ok3)
         }
let embed = new Discord.RichEmbed()
.setDescription("[INVITE](https://discordapp.com/oauth2/authorize?client_id=667975393495613442&scope=bot&permissions=2084007120)\n [BETA BOT INVITE](https://discordapp.com/oauth2/authorize?client_id=678907352220696596&scope=bot&permissions=2084007120)");
      message.channel.send(embed)

    }
}
