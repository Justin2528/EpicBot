const Discord = require('discord.js');

module.exports = {
    name: "reboot",
    category: "owner",
    description: "reboot the bot",

 aliases: ["rb"],
    run: async (client, message, args,ops,guildconf,dsettings) => {
      
if (message.author.id !== "386490806716071946") return message.channel.send("no.")

  await message.reply("Bot is rebooting.");
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  });
  process.exit(1);
    }
}