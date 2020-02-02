const Discord = require('discord.js');
module.exports = {
    name: "points",
    category: "level",
    description: "get your points, you can't get other's points",

    run: async (client, message, args,ops,guildconf,dsettings) => {
      const key = `${message.guild.id}-${message.author.id}`;
    return message.channel.send(`You currently have ${client.points.get(key, "points")} points, and are level ${client.points.get(key, "level")}!`);

    }
}
