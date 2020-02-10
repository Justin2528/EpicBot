const Discord = require('discord.js');

module.exports = {
    name: "info",
    category: "info",
    description: "this bot info if you don't know",

    run: async (client, message, args,ops,guildconf,dsettings) => {
      
let reason = ""
if (!reason) reason = "am too lazy to set the reason so NO REASON PROVIDED" // reason 
message.delete()
let ok2 = "https://cdn.discordapp.com/attachments/671678458941800451/673527187160301568/1177_Pensive_Weird.gif"
let embedwarn = new Discord.RichEmbed()
.setColor("RED")
.setTitle("This command has been disabled.")
.setDescription(`Sorry! This command has been disabled because **\`${reason}\`**.`)
.setThumbnail(ok2)
.setFooter("Sad", message.author.displayAvatarURL);

return message.channel.send(embedwarn).then(m => m.delete(5500))
let ok = new Discord.RichEmbed()

    }
}