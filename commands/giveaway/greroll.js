const giveaways = require("discord-giveaways");
module.exports = {
    name: "greoll",
    category: "giveaway",
    description: "reroll the giveaway winner <NEED GIVEAWAY ROLE>",
     usage: "<messageID of the giveaway>",

    run: async (client, message, args,ops) => {
      
if (!message.member.roles.some(role => role.name === 'giveaway')) return message.channel.send("Hey! you need the `giveaway` role!")
     let messageID = args[0];
        giveaways.reroll(messageID, {
    congrat: ":tada: New winner(s) : {winners}! Congratulations!",
    error: "No valid participations, no winners can be chosen!"
        }).catch((err) => {
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
}
}
 
    