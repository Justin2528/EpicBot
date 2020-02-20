const Discord = require('discord.js');
const send = require('quick.hook');
module.exports = {
    name: "webhook",
    category: "test",
    description: "Don't mind",
usage: "<stuff>",
 aliases: ["wh"],
    run: async (client, message, args,ops,guildconf,dsettings) => {

message.delete()
const nameAvatar = args.join(" ");
const linkCheck = /https?:\/\/.+\.(?:png|jpg|jpeg)/gi;
if (!linkCheck.test(nameAvatar)) return message.reply("You must supply an image link.");
const avatar = nameAvatar.match(linkCheck)[0];
const name = nameAvatar.replace(linkCheck, "");
message.channel.createWebhook(name, avatar)
  .then(webhook => webhook.send("I'm alive!"))
    .catch(error => console.log(error))
    }
}