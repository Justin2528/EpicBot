const Discord = require('discord.js');
const snekfetch = require("snekfetch");
module.exports = {
    name: "watchdogstats",
    category: "minecraft",
    description: "Watchdog stats",
     
 aliases: ["wdstats"],
    run: async (client, message, args,ops,guildconf,dsettings) => {
      
var url = "https://api.hypixel.net/watchdogstats?key=" + process.env.APIKEY

const snekfetch = require("snekfetch");    




snekfetch.get(url).then(r => {
    let body = r.body

    let oke = body.watchdog_total+body.staff_total
    let photo = "https://images-ext-1.discordapp.net/external/KiCZjFl7Ph0aD0Sy3-1EAADDbRLE8k6NayWFH6olu5o/%3Fs%3D200%26v%3D4/https/avatars0.githubusercontent.com/u/3840546"
    let ok = new Discord.RichEmbed()
   .setAuthor("Hypixel WatchDog Statistics")
    .setColor("RED")
   .addField("**Total Bans**", `Bans: \`${oke}\` \n WatchDog Bans: \`${body.watchdog_total}\` \n Staff Bans: \`${body.staff_total}\``, true)
  .addField("**Todays Bans**", `WatchDog Bans: \`${body.watchdog_rollingDaily}\` \n Staff Bans: \`${body.staff_rollingDaily}\` \n Last Minute: \`${body.watchdog_lastMinute}\``, true)
    .setThumbnail("https://vignette.wikia.nocookie.net/hypixelserver/images/9/94/Watchdog.png")
    .setFooter("Don't think Watchdog is weak!", photo)
message.channel.send(ok)
    });
    }
}

                        