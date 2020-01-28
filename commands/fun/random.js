const Discord = require("discord.js"),
  Chance = require("chance"),
  random = new Chance(),
  parseArgs = require("minimist");

module.exports = {
  name: "random",
  category: "fun",
  description: "Random stuff don't ask",
  run: async (client, message, args) => {
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
