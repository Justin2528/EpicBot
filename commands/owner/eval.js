const { RichEmbed } = require("discord.js");
const beautify = require("beautify");
module.exports = {
  name: "eval",
  category: "owner",
  description: "hm why you need to know what is this",
  usage: "<secret code to do idk>",
  aliases: ["e"],
  run: async (client, message, args) => {
    if (message.author.id !== "386490806716071946") {
      return message.channel.send("No. boomer").then(m => m.delete(5000));
    }

    if (!args[0]) {
      return message.channel
        .send("Error while evaling air")
        .then(m => m.delete(5000));
    }
    try {
      if (
        args
          .join(" ")
          .toLowerCase()
          .includes("token")
      ) {
        return message.channel
          .send("Bruh pls don't show le token")
          .then(m => m.delete(5000));
      }
      const toEval = args.join(" ");
      const evaluated = eval(toEval);
      let embed = new RichEmbed()
        .setColor("#00FF00")
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL)
        .setTitle("Eval")
        .addField(
          "To evaluate:",
          `\`\`\`js\n${beautify(args.join(" "), { format: "js" })}\n\`\`\``
        )
        .addField("Evaluated:", evaluated)
        .addField("Type of:", typeof(evaluated));

      message.channel.send(embed);
    } catch (e) {
 let embed = new RichEmbed()
.setColor("#FF0000")
 .setTitle("\:x: Error!")
 .setDescription(e)
 .setFooter(client.user.username, client.user.displayAvatarURL);
      message.channel.send(embed);
}
  }
};
