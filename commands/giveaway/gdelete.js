const giveaways = require("discord-giveaways")    
  module.exports = {
    name: "gdelete",
    category: "giveaway",
    description: "Delete a giveaway <NEED GIVEAWAY ROLE>",
     usage: "<Message ID of the giveaway>",

    run: async (client, message, args,ops) => {
      
 let messageID = args[0];
        giveaways.delete(messageID).then(() => {
            message.channel.send("Success! Giveaway deleted!");
        }).catch((err) => {
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
    }
}
 