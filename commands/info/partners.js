const Discord = require('discord.js');
let ok1 = require("../../boop.json");
module.exports = {
    name: "partners",
    category: "info",
    description: "partnership",

    run: async (client, message, args,ops,guildconf,dsettings) => {
let reason = "uh, this command will be used later."
if (!reason) reason = "am too lazy to set the reason so NO REASON PROVIDED" // reason 
message.delete()
let ok10 = "https://cdn.discordapp.com/attachments/671678458941800451/673527187160301568/1177_Pensive_Weird.gif"
let embedwarn = new Discord.RichEmbed()
.setColor("RED")
.setTitle("This command has been disabled.")
.setDescription(`Sorry! This command has been disabled because **\`${reason}\`**.`)
.setThumbnail(ok10)
.setFooter("Sad", message.author.displayAvatarURL);

return message.channel.send(embedwarn).then(m => m.delete(5500))
let ok1 = require("../../boop.json");
        let chance = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let ok2 = ok1.ads
      let ok3 = ok2[Math.floor(Math.random() * ok2.length)]
         if (chance < 30) {
        message.channel.send(ok3)
         }
   message.channel.send("Will be used later")
    }
}