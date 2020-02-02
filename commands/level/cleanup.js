const Discord = require('discord.js');
const db = require("quick.db");
module.exports = {
    name: "cleanup",
    category: "level",
    description: "clean up all the points of all inactive ppl (NEED PERMS)",

    run: async (client, message, args,ops,guildconf,dsettings) => {
           if(!message.member.hasPermission("MANAGE_MESSAGES")) {
  return message.channel.send("You don't have the `Administrator` Perms!")
}
 const filtered = client.points.filter( p => p.guild === message.guild.id );

    // We then filter it again (ok we could just do this one, but for clarity's sake...)
    // So we get only users that haven't been online for a month, or are no longer in the guild.
    const rightNow = new Date();
    const toRemove = filtered.filter(data => {
      return !message.guild.members.has(data.user) || rightNow - 2592000000 > data.lastSeen;
    });

    toRemove.forEach(data => {
      client.points.delete(`${message.guild.id}-${data.user}`);
    });

    message.channel.send(`I've cleaned up ${toRemove.size} old guy.`);
    }
}
