const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
    name: "removewarn",
    category: "moderation",
    description: "remove warns some ppl",
     usage: "<user> <warns to remove>",
 aliases: ["rw"],
    run: async (client, message, args,ops,guildconf,dsettings) => {
      
 if(!message.member.hasPermission(0x00000008)) return message.channel.send("You need the Admin Perms!");
      let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

if(!user) return message.channel.send("Plz, who is the guy.")
      const numberwarn = new db.table('WARNNUMBERs')
    const num1 = await numberwarn.fetch(`user_${user.id}_${message.guild.id}`)
    if(!args[1]){
      return message.channel.send("Plz tell me how many warns need to be clear to that guy")
    }
if(num1 === 0) return message.channel.send("That dud got 0 warns. NO extra chances");
 if(args[1] > num1) return message.channel.send("I can't make that dud's warns to negative number!")
numberwarn.subtract(`user_${user.id}_${message.guild.id}`, Number(args[1])).catch(console.error)
  message.channel.send("Done! Removed `" + args[1] + "` warns from " + args[0] + "!")
    }
}