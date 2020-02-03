const Discord = require('discord.js');
module.exports = {
    name: "quicksupport",
    category: "info",
    description: "When you type this command, we'll be asap and contact you.",
    
 aliases: ["quickhelp"],
    run: async (client, message, args,ops,guildconf,dsettings) => {
      

let reason = "this command is broken and we're fixing it" // reason 

let ok = "https://cdn.discordapp.com/attachments/671678458941800451/673527187160301568/1177_Pensive_Weird.gif"
let embedwarn = new Discord.RichEmbed()
.setColor("RED")
.setTitle("This command has been disabled.")
.setDescription(`Sorry! This command has been disabled because ${reason}.`)
.setThumbnail(ok)
.setFooter("Sad", message.author.displayAvatarURL);

return message.channel.send(embedwarn).then(m => m.delete(5500))
      const cnl = client.channels.get('671678458941800451');

    }
}
