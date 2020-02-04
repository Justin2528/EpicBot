const Discord = require('discord.js');
   const cooldown = new Set();
module.exports = {
    name: "quicksupport",
    category: "info",
    description: "When you type this command, we'll be asap and contact you.",
    
 aliases: ["quickhelp"],
    run: async (client, message, args,ops,guildconf,dsettings) => {
   
      
    if (cooldown.has(message.author.id && message.guild.id)) {
        return message.channel.send('**[COOLDOWN]** Sending `help` has **7 Minutes** Cooldown!');
    }
    cooldown.add(message.author.id && message.guild.id);
    setTimeout(() => {
        cooldown.delete(message.author.id && message.guild.id);
    }, 50000);
// let reason = "this command is broken and we're fixing it" // reason 

// let ok = "https://cdn.discordapp.com/attachments/671678458941800451/673527187160301568/1177_Pensive_Weird.gif"
// let embedwarn = new Discord.RichEmbed()
// .setColor("RED")
// .setTitle("This command has been disabled.")
// .setDescription(`Sorry! This command has been disabled because ${reason}.`)
// .setThumbnail(ok)
// .setFooter("Sad", message.author.displayAvatarURL);

// return message.channel.send(embedwarn).then(m => m.delete(5500))
let poop = client.users.get("386490806716071946");
     message.channel.send("Ok, support is on the way");

     poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
     poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" +  message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" +message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY Is " + message.author.username + "#" + message.author.discriminator)
    poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
     poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" +  message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" +message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY Is " + message.author.username + "#" + message.author.discriminator)
    poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
     poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" +  message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" +message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY Is " + message.author.username + "#" + message.author.discriminator)
    poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
     poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" +  message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" +message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY Is " + message.author.username + "#" + message.author.discriminator)
    poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
     poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" +  message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" +message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY Is " + message.author.username + "#" + message.author.discriminator)
    poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
     poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" +  message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" +message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY IS " + message.author.username + "#" + message.author.discriminator)
           poop.send("HELP SOMEONE NEED YOU AND THAT GUY Is " + message.author.username + "#" + message.author.discriminator)

    }
}
