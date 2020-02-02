const Discord = require('discord.js');
module.exports = {
    name: "reset",
    category: "level",
    description: "reset the server level data",

    run: async (client, message, args,ops,guildconf,dsettings) => {
                     if(!message.member.hasPermission(0x00000008)) {
  return message.channel.send("You don't have the `Administrator` Perms!")
}
        const filtered = client.points.filter( p => p.guild === message.guild.id );

    filtered.forEach(data => {
      client.points.delete(`${message.guild.id}-${data.user}`);
    });
 message.channel.send(`I've cleaned up ${filtered.size} people's points + level`);
    }
}
