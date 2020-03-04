const Discord = require("discord.js");
const moment = require('moment');
const cooldown = new Set();
module.exports = {
    name: "ticket",
    category: "info",
    description: "Create a ticket",

    run: async (client, message, args,ops,guildconf,dsettings) => {
      let ok1 = require("../../boop.json");
        let chance = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let ok2 = ok1.ads
      let ok3 = ok2[Math.floor(Math.random() * ok2.length)]
         if (chance < 30) {
        message.channel.send(ok3)
         }

    




   let boi = message.content.split(' ').slice(1).join(' ');
 message.delete()
    if (cooldown.has(message.author.id && message.guild.id)) {
        return message.channel.send('**[COOLDOWN]** Sending tickets has **5 Minutes** Cooldown!');
    }
    if (boi.length < 1) {
        return message.channel.send(`You must give me something to report first ${message.author}`);
    }
    cooldown.add(message.author.id && message.guild.id);
    setTimeout(() => {
        cooldown.delete(message.author.id && message.guild.id);
    }, 300000);
    let guild = message.guild;
    const cnl = client.channels.get('671678458941800451');
    message.channel.send(`Hey, ${message.author}, we got your report! We will reply as soon as possible! Here is the full ticket:`);
    const embed2 = new Discord.RichEmbed()
        .setAuthor(`Ticket from ${message.author.tag}`, message.author.displayAvatarURL)
        .addField('Ticket:', `**Tickets's Author:** ${message.author.tag}\n**Server:** ${guild.name}\n**Full ticket:** ${boi}`)
        .setThumbnail(message.author.displayAvatarURL)
        .setFooter(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
        .setColor("GREEN");
    message.channel.send(embed2);
    const embed = new Discord.RichEmbed()
        .setAuthor(`Ticket from ${message.author.tag}`, message.author.displayAvatarURL)
        .addField('Ticket:', `**Report's Author:** ${message.author.tag}\n**Server:** ${guild.name}\n**Full report:** ${boi}`)
        .setThumbnail(message.author.displayAvatarURL)
        .setColor("YELLOW")
        .setFooter(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`);
    cnl.send(embed)
        .catch(e => cnl.send(e))
}
}