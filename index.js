const { Client, Collection, RichEmbed, WebhookClient } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");
const snekfetch = require("snekfetch");
const giveaways = require("discord-giveaways")
const DBL = require("dblapi.js");
const Enmap = require('enmap');
const client = new Client({ disableEveryone: true });
const hook = new WebhookClient("687949301036613634", process.env.WEBKEN);
client.points = new Enmap({name: "points"});

const dbl = new DBL(process.env.TOKEL, client);

const ownerID = '386490806716071946'
const active = new Map();
 let ops = {
      ownerID: ownerID,
      active: active
    }

const DBM = {};
const DiscordJS = DBM.DiscordJS = require('discord.js');

var servers = {};

const express = require('express');
const keepalive = require('express-glitch-keepalive');
const app = express();
client.settings = new Enmap({
  name: "settings",
  fetchAll: false,
  autoFetch: true,
  cloneLevel: 'deep'
});
const dsettings = {
  modLogChannel: "mod-log",
  welcomeChannel: "welcome",
  welcomeMessage: "Say hello to {{user}}, everyone!",
  reportChannel: "report",
 levelupChannel: "levels",
levelupMessage: "Woohoo! **{{user}}** has leveled up to level **{{newlevel}}**! Congrats"
}
client.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
    //Your other stuff like adding to guildArray
   let channelID;
    let channels = guild.channels;
    channelLoop:
    for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }
  const ok = new RichEmbed()
.setColor("GREEN")
  .setDescription("**Thanks for inviting me into this server!**")
  .setFooter(client.user.username,client.user.displayAvatarURL)
  .addField("**My prefix:**", " **`epic>`**")
  .addField("**You can see a list of commands by typing** ", "**`epic>help`**")
  .addField("**Have an epic day!**")
  .setTitle("**Hey!**")
  .setThumbnail("https://cdn.discordapp.com/attachments/672418900721401908/684400892237053958/2184_wumpus_color_gif.gif");

    let channel = client.channels.get(guild.systemChannelID || channelID);
    channel.send(ok);

  hook.send(client.guilds.size + " " + guild.name)
})
client.on("guildDelete", guild => {
    console.log("Left a guild: " + guild.name);
    //remove from guildArray
})
client.on("guildDelete", guild => {
  // When the bot leaves or is kicked, delete settings to prevent stale entries.
  client.settings.delete(guild.id);
});
app.use(keepalive);

app.use(express.static('public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.listen(process.env.PORT, () => console.log(`EpicBot listening on port ${process.env.PORT}!`));



client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
let status = ["Shrek 5", "Prefix: epic>", "NEW UGLY WEBSITE! https://discord-epicbot.glitch.me THIS LINK IS FOR STATUS UPDATE IF BOT IS DOWN", "epic>invite => invite epicbot beta => type epic~adsapply => apply away!"]
client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    setInterval(() => {
        dbl.postStats(client.guilds.size);
      console.log(`Posted ${client.guilds.size} to DBL!`)
    }, 900000);

setInterval(function() {
  let stats = status[Math.floor(Math.random()*status.length)];
  client.user.setPresence({ game: { name: stats }, status: 'online', type: "WATCHING" })
}, 5000);

    giveaways.launch(client, {
        updateCountdownEvery: 5000,
        botsCanWin: false,
        ignoreIfHasPermission: [

        ],
        embedColor: "#00FFFF",
        reaction: "🎉"
    });
//       setInterval(function() {
//             snekfetch.post(`https://api.botlist.space/v1/bots/667975393495613442`)
//         .set('Authorization', process.env.TOKELL)
//         .send({
//            'server_count': client.guilds.size
       
//         })

  
// console.log(`Posted ${client.guilds.size} to botlist.space`)
//    }, 100000)
 });

client.on("message", async message => {
   if (message.author.bot) return;   
if (message.isMentioned(client.user)) message.reply("my prefix is **`epic>`**! Help Command: **`epic>help`**").then(m => m.delete(4000))
const prefix = "epic>";

 let ops = {
      ownerID: ownerID,
      active: active
    }


let ok = "https://cdn.discordapp.com/attachments/671678458941800451/673527187160301568/1177_Pensive_Weird.gif"
let embedwarn = new RichEmbed()
.setColor("RED")
.setTitle("DM Channel has been disabled")
.setDescription(`Sorry! DM Channel has been disabled`)
.setThumbnail(ok)
.setFooter("Sad", message.author.displayAvatarURL);
 

if(message.channel.type === "dm") return message.channel.send(embedwarn).then(m => m.delete(5000));
 
    if (!message.guild) return;
   const guildconf = client.settings.ensure(message.guild.id, dsettings);
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
     client.settings.ensure(message.guild.id, dsettings);
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

  
    if (command) 
        command.run(client, message, args, ops,guildconf,dsettings,dbl);
  if (message.guild) {
    // Let's simplify the `key` part of this.
    const key = `${message.guild.id}-${message.author.id}`;
    client.points.ensure(key, {
      user: message.author.id,
      guild: message.guild.id,
      points: 0,
      level: 1
    });
    client.points.inc(key, "points");
  const curLevel = Math.floor(0.1 * Math.sqrt(client.points.get(key, "points")));

    // Act upon level up by sending a message and updating the user's level in enmap.
    if (client.points.get(key, "level") < curLevel) {
     let levelupMessage = client.settings.get(message.guild.id, "levelupMessage");
  
  // Our welcome message has a bit of a placeholder, let's fix that:
  levelupMessage = levelupMessage.replace("{{user}}", message.user.tag, "{{newlevel}}", curLevel)
  
   let ok = message.guild.channels.find("name", client.settings.get(message.guild.id, "levelupChannel"))
if (!ok) return message.channel.send(levelupMessage).then(m => m.delete(6000));
      ok.send(levelupMessage)
  .catch(console.error);
      client.points.set(key, curLevel, "level");
    } 
  }
                  
});

client.login(process.env.TOKEN);