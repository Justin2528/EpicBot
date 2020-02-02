const Discord = require("discord.js"),
  Chance = require("chance"),
  random = new Chance(),
  parseArgs = require("minimist");

module.exports = {
  name: "random",
  category: "fun",
  description: "Random stuff don't ask",
  run: async (client, message, args) => {
message.delete()
let reason = "this command is useless and I created it for no reason" // reason 

let ok = "https://cdn.discordapp.com/attachments/671678458941800451/673527187160301568/1177_Pensive_Weird.gif"
let embedwarn = new Discord.RichEmbed()
.setColor("RED")
.setTitle("This command has been disabled.")
.setDescription(`Sorry! This command has been disabled because **\`${reason}\`**.`)
.setThumbnail(ok)
.setFooter("Sad", message.author.displayAvatarURL);

return message.channel.send(embedwarn).then(m => m.delete(5500))
    const embed = new Discord.RichEmbed().setColor(0xffffff);

    // Check if they typed 'list' / didn't mention an item
    if (!args[0] || args[0].toLowerCase() === "list") {
      // Declare Variables
      let resp = Object.keys(Object.getPrototypeOf(random));

      // Remove First Item (Version)
      resp.shift();

      // Configure Embed
      embed.setDescription(resp.join(", ")).setTitle("List");

      // Return & Send Embed
      return message.channel.send(embed);
    }
  }
};
