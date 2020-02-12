const Discord = require('discord.js');
module.exports = {
    name: "pit",
    category: "minecraft",
    description: "Check Your/Someone's pit stats",
     usage: "<Minecraft IGN>",
 aliases: ["pitstats"],
    run: async (client, message, args) => {
 message.delete() 
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.TOKEL, client);

dbl.hasVoted(message.author.id).then(voted => {
    if (voted) {

 var IGN = args[0];
 
if(!IGN) return message.channel.send("Ok, what IS THE IGN????")

 var url = "https://api.hypixel.net/player?key=" + process.env.APIKEY + "&name=" + IGN;

console.log(url);



const snekfetch = require("snekfetch");

snekfetch.get(url).then(r => {
let body = r.body
if(!body.player) return message.channel.send(`ERROR 404: IDK`)
let offon = `${body.player.displayname} is offline!`
let photo = "https://images-ext-1.discordapp.net/external/UdWXoKUsaYCOyvH6nsDk03AdfJVWTK7cyQVvhqpoF3I/https/image.ibb.co/hwheRV/image.png"

if(body.player.lastLogout < body.player.lastLogin){
  offon = `${body.player.displayname} is online!`
  photo = "https://images-ext-1.discordapp.net/external/74xyeTgd4BElwkkoe92yB3zEwD1ln4N1rh2zeKxVwt8/https/image.ibb.co/h9VNfq/image.png"
} 

if(!body.player.stats.Pit) return message.channel.send(`ERROR 404: Uh, ${IGN} never player pit? (hypixel pit)`)

if(!body.player.stats.Pit.pit_stats_ptl.playtime_minutes) return message.channel.send(`ERROR 404: Uh, ${IGN} never player pit? (hypixel pit)`)

let image = "https://visage.surgeplay.com/full/" + body.player.uuid +".png"

let hours = Math.floor(body.player.stats.Pit.pit_stats_ptl.playtime_minutes / 60);

console.log(body)

let ok = new Discord.RichEmbed()
.setTitle("Pit stats (Hypixel)")
.setColor("9b7653")
.setDescription(`${body.player.displayname}'s Pit stats`)
.addField("XP", body.player.stats.Pit.profile.xp || "0", true)
.addField("Play time (minutes)", body.player.stats.Pit.pit_stats_ptl.playtime_minutes || "0",true)
.addField("Play time (hour)", hours, true)
.addField("Enderchest open times", body.player.stats.Pit.pit_stats_ptl.enderchest_opened || "0", true)
.addField("Joins", body.player.stats.Pit.pit_stats_ptl.joins || "0", true)
.setThumbnail("https://hypixel.net/styles/hypixel-uix/hypixel/game-icons/Prototype-64.png")
.addField("Diamond Items purchased", body.player.stats.Pit.pit_stats_ptl.diamond_items_purchased || "0", true)
.addField("Chat Messages", body.player.stats.Pit.pit_stats_ptl.chat_messages || "0", true)
.addField("Gold earned", body.player.stats.Pit.pit_stats_ptl.cash_earned || "0", true)
.addField("Gold", body.player.stats.Pit.profile.cash + "g"|| "0", true)
.addField("Renown", body.player.stats.Pit.profile.renown || "0", true)
.addField("Fishing Rod Launched", body.player.stats.Pit.pit_stats_ptl.fishing_rod_launched || "0", true)
.addField("Golden Head Eaten", body.player.stats.Pit.pit_stats_ptl.ghead_eaten || "0", true)
.addField("Golden Apple Eaten", body.player.stats.Pit.pit_stats_ptl.gapple_eaten || "0", true)
.addField("Left Clicks", body.player.stats.Pit.pit_stats_ptl.left_clicks || "0", true)
.addField("Launched by launchers", body.player.stats.Pit.pit_stats_ptl.launched_by_launchers || "0", true)
.addField("Jumped into Pit", body.player.stats.Pit.pit_stats_ptl.jumped_into_pit || "0", true)
.addField("Kills", body.player.stats.Pit.pit_stats_ptl.kills || "0", true)
.addField("Assists", body.player.stats.Pit.pit_stats_ptl.assists || "0", true)
.addField("Sword Hits", body.player.stats.Pit.pit_stats_ptl.sword_hits || "0", true)
.addField("Arrow Hits", body.player.stats.Pit.pit_stats_ptl.arrow_hits || "0", true)
.addField("Damage Dealt", body.player.stats.Pit.pit_stats_ptl.damage_dealt || "0", true)
.addField("Melee Damage received", body.player.stats.Pit.pit_stats_ptl.melee_damage_received || "0", true)
.addField("Deaths", body.player.stats.Pit.pit_stats_ptl.deaths || "0", true)
.addField("Highest Streak", body.player.stats.Pit.pit_stats_ptl.max_streak || "0", true)
.addField("Night Quests Completed", body.player.stats.Pit.pit_stats_ptl.night_quests_completed || "0", true)


//.addField("", body.player.stats.Pit.pit_stats_ptl. || "0", true)

//Ok LOL
let ok2 = new Discord.RichEmbed()
.setColor("9b7653")
.setImage(image)
.addField("Sewer Treasures Found", body.player.stats.Pit.pit_stats_ptl.sewer_treasures_found || "0", true)
.addField("Wheat Farmed", body.player.stats.Pit.pit_stats_ptl.wheat_farmed || "0", true)
.addField("Dark Pants Created", body.player.stats.Pit.pit_stats_ptl.dark_pants_crated || "0", true)
.setFooter(offon, photo)

message.channel.send(ok).then(message.channel.send(ok2));
}) 
} else {
  
  let ok3 = new Discord.RichEmbed()
.setDescription("You today haven't vote yet. [Vote here](https://top.gg/bot/667975393495613442/vote) to use the command.")
.setColor("BLUE")
  return message.channel.send(ok3)
}
   

    });
    }
}
