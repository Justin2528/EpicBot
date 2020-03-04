const Discord = require("discord.js");
module.exports = {
    name: "support",
    category: "info",
    description: "get support",

    run: async (client, message, args,ops) => {
let ok1 = require("../../boop.json");
        let chance = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let ok2 = ok1.ads
      let ok3 = ok2[Math.floor(Math.random() * ok2.length)]
         if (chance < 30) {
        message.channel.send(ok3)
         }
let embed = new Discord.RichEmbed()
.setColor("RED")
.setDescription("WARNING: JOIN IF YOU REALLY REALLY NEED HELP [HERE](https://discord.gg/TJHNkR7) or use epic>quicksupport! OR use epic>ticket");
      message.channel.send(embed)

    }
}
