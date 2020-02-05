const Discord = require('discord.js');
const send = require('quick.hook');
module.exports = {
    name: "webhook",
    category: "test",
    description: "Test quick.hook module",
usage: "<stuff>",
 aliases: ["wh"],
    run: async (client, message, args,ops,guildconf,dsettings) => {
let reason = "command broken and fixing" // reason 
message.delete()
let ok = "https://cdn.discordapp.com/attachments/671678458941800451/673527187160301568/1177_Pensive_Weird.gif"
let embedwarn = new Discord.RichEmbed()
.setColor("RED")
.setTitle("This command has been disabled.")
.setDescription(`Sorry! This command has been disabled because **\`${reason}\`**.`)
.setThumbnail(ok)
.setFooter("Sad", message.author.displayAvatarURL);

return message.channel.send(embedwarn).then(m => m.delete(5500))
let embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("TEST")
.setDescription("WEBHOOK TEST")
.setFooter("TESTIG WEBHOOK")
.addField("TEST", "WEBHOOK")
send(message.channel, embed, {
  name: "WEBHOOK TEST",
  icon: "https://i.imgur.com/X9eAmHm.png"
})
    }
}