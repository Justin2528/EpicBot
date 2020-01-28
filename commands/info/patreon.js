const Discord = require("discord.js");
module.exports = {
    name: "patreon",
    category: "info",
    description: "Support me",

    run: async (client, message, args,ops) => {
      let embed = new Discord.RichEmbed()
      .setDescription("[PATREON LINK PLS ](https://www.patreon.com/discordepicbot)")
message.channel.send(embed)
message.channel.send("Ok, I know you just want to type this command for something but listen, **BE SURE TO BE A PATRON SO I CAN HELP AUSTRAILA**")
    }
}
