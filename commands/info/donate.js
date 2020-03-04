const Discord = require("discord.js");
module.exports = {
    name: "donate",
    category: "info",
    description: "Just like patreon but paypal",

    run: async (client, message, args,ops,guildconf,dsettings) => {
let ok1 = require("../../boop.json");
        let chance = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let ok2 = ok1.ads
      let ok3 = ok2[Math.floor(Math.random() * ok2.length)]
         if (chance < 30) {
        message.channel.send(ok3)
         }
      let embed = new Discord.RichEmbed()
      .setDescription("[Donate](https://www.paypal.me/DaJustin2528) JUST LIKE PATREON ALL THE MONEY WILL GO TO CHARITY AND YOU GET NO PERKS EVEN IF YOU DONATE BUT IF YOU WANT PERKS THEN TELL ME AFTER U DONATE AND SEND ME A SS OF THE RECIEPT OR TELL ME YOUR EMAIL SO I KNOW THAT YOU DONATED AND YOU MIGHT GET PERKS SO YEAH OK THX").setColor("BLUE")
message.channel.send(embed)
    }
}
