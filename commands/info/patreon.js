const Discord = require("discord.js");
module.exports = {
    name: "patreon",
    category: "info",
    description: "Support me",

    run: async (client, message, args,ops) => {
let ok1 = require("../../boop.json");
        let chance = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let ok2 = ok1.ads
      let ok3 = ok2[Math.floor(Math.random() * ok2.length)]
         if (chance < 30) {
        message.channel.send(ok3)
         }
      let embed = new Discord.RichEmbed()
      .setDescription("[PATREON LINK](https://www.patreon.com/discordepicbot)")
message.channel.send(embed)

    }
}
