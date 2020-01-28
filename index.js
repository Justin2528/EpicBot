const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");
const snekfetch = require("snekfetch");

const client = new Client({
    disableEveryone: true
});
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

app.use(keepalive);

app.use(express.static('public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.listen(process.env.PORT, () => console.log(`DerpBot listening on port ${process.env.PORT}!`));


app.use(express.static('public'))
client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
let status = ["Shrek 5", "Prefix: epic>"]
client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

  setInterval(function() {
            snekfetch.post(`https://discord.bots.gg/api/v1/bots/667975393495613442/stats`)
        .set('Authorization', process.env.TOKEL)
        .send({
            'guildCount': client.guilds.size

        }).then(console.log(`${client.guilds.size} was posted`))
  }, 30000 );

setInterval(function() {
  let stats = status[Math.floor(Math.random()*status.length)];
  client.user.setPresence({ game: { name: stats }, status: 'online', type: "WATCHING" })
}, 5000);
});

client.on("message", async message => {
    const prefix = "epic>";

 let ops = {
      ownerID: ownerID,
      active: active
    }

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args, ops);
});

client.login(process.env.TOKEN);