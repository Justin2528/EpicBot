const Discord = require("discord.js");
const userCreatedPolls = new Map();
module.exports = {
  name: "poll",
  category: "moderation",
  description: "Create a poll",
  usage: "<Stuff to poll>",
  aliases: ["vote"],
  run: async (client, message, args, ops) => {
 if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("NEED Manage Messages perms");
  
if(!args[0]) return message.channel.send("Nope")

 let ok = new Discord.RichEmbed()
   .setColor("RANDOM")
  .setFooter("React to vote!")
   .setDescription(args.join(' '))
   .setTitle(`Poll Created By ${message.author.username}`)

  let msg = await message.channel.send(ok);

   await msg.react("✅");
   await msg.react("🤔")
   await msg.react("❌")

 message.delete()
}
};
