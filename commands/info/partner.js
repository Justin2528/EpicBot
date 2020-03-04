const Discord = require('discord.js');
let ok1 = require("../../boop.json");
module.exports = {
    name: "partner",
    category: "info",
    description: "partnership",

    run: async (client, message, args,ops,guildconf,dsettings) => {
let ok1 = require("../../boop.json");
        let chance = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let ok2 = ok1.ads
      let ok3 = ok2[Math.floor(Math.random() * ok2.length)]
         if (chance < 30) {
        message.channel.send(ok3)
         }
   message.channel.send("Will be used later")
    }
}