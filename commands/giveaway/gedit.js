const giveaways = require("discord-giveaways")
module.exports = {
    name: "gedit",
    category: "giveaway",
    description: "edit the giveaway <NEED GIVEAWAY ROLE>",
     usage: "<Giveaway Message ID> <New winners count> <Time  (Do -<number> to reduce time)> <Prize>",

    run: async (client, message, args,ops) => {
      
if (!message.member.roles.some(role => role.name === 'giveaway')) return message.channel.send("Hey! you need the `giveaway` role!")

        let messageID = args[0];
        giveaways.edit(messageID, {
            newWinnersCount: args[1],
            newPrize: args[3],
            addTime: args[2]
        });
    }
}

