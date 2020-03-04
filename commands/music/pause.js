module.exports = {
    name: "pause",
    category: "music",
    description: "pause the music that is playing rn",
 
    run: async (client, message, args,ops) => {
let ok1 = require("../../boop.json");
        let chance = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let ok2 = ok1.ads
      let ok3 = ok2[Math.floor(Math.random() * ok2.length)]
         if (chance < 30) {
        message.channel.send(ok3)
         }
      
let fetched = ops.active.get(message.guild.id);

 if(!fetched) return message.channel.send("There currently isn't any music playing in this guild!");
  
  if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Sorry, you aren't in the same channel as the bot.");
  
  if(fetched.dispatcher.paused) return message.channel.send("This music is already paused!");

 fetched.dispatcher.pause();
  
   message.channel.send(`Successfully paused \`${fetched.queue[0].songTitle}\`!`);
    }
}
