const Discord = require("discord.js");
module.exports = {
  name: "hypixel",
  category: "minecraft",
  description: "Check your/someone's hypixel stats",
  usage: "<Minecraft IGN>",
  aliases: ["h"],
  run: async (client, message, args) => {
  message.delete();
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.TOKEL, client);
// let reason = "the vote feature is broken"
// if (!reason) reason = "am too lazy to set the reason so NO REASON PROVIDED" // reason 
// message.delete()
// let ok2 = "https://cdn.discordapp.com/attachments/671678458941800451/673527187160301568/1177_Pensive_Weird.gif"
// let embedwarn = new Discord.RichEmbed()
// .setColor("RED")
// .setTitle("This command has been disabled.")
// .setDescription(`Sorry! This command has been disabled because **\`${reason}\`**.`)
// .setThumbnail(ok2)
// .setFooter("Sad", message.author.displayAvatarURL);

// return message.channel.send(embedwarn).then(m => m.delete(5500))
dbl.hasVoted(message.author.id).then(voted => {
   if(voted)  {



    var IGN = args[0];


    if (!IGN) return message.channel.send("Ok, where is da IGN????");

    var url =
      "https://api.hypixel.net/player?key=" +
      process.env.APIKEY +
      "&name=" +
      IGN;
    console.log(url);

    const snekfetch = require("snekfetch");

    snekfetch.get(url).then(r => {
      let body = r.body;

      var dateString1 = body.player.lastLogin;
      var currentTime1 = new Date(parseInt(dateString1));
      var month1 = currentTime1.getMonth() + 1;
      var day1 = currentTime1.getDate();
      var year1 = currentTime1.getFullYear();
      var date1 = day1 + "/" + month1 + "/" + year1;

      var dateString2 = body.player.firstLogin;
      var currentTime2 = new Date(parseInt(dateString2));
      var month2 = currentTime2.getMonth() + 1;
      var day2 = currentTime2.getDate();
      var year2 = currentTime2.getFullYear();
      var date2 = day2 + "/" + month2 + "/" + year2;

      var dateString3 = body.player.lastLogout;
      var currentTime3 = new Date(parseInt(dateString3));
      var month3 = currentTime3.getMonth() + 1;
      var day3 = currentTime3.getDate();
      var year3 = currentTime3.getFullYear();
      var date3 = day3 + "/" + month3 + "/" + year3;
     let image =
        "https://visage.surgeplay.com/full/" + body.player.uuid + ".png";
      let image2 =
        "https://gen.plancke.io/exp/" + body.player.displayname + ".png";
      if (!body.player)
        return message.channel.send(`ERROR: Not even the stats`);

     let ok3 = new Discord.RichEmbed()
        .setTitle("Hypixel stats (Minecraft Server)")
        .setColor("9b7653")
        .setDescription(`${body.player.displayname}'s Hypixel stats <SINCE THIS PLAYER IS AN SPECIAL PLAYER, THERE MIGHT BE SOMETHING MISSING>`)
        .setImage(image)
        .setThumbnail(
          "https://hypixel.net/styles/hypixel-uix/hypixel/platform-pc.png"
        )
        .addField("First Login", date2, true)

        .addField("Display Name", body.player.displayname || "0", true)
        .addField("Package Rank", body.player.newPackageRank || "NON", true)
        .addField("Speical Rank", body.player.rank || "NOPE", true)
        .addField("Network EXP", body.player.networkExp || "0", true)
        .addField("Karma", body.player.karma || "0", true)
        .addField(
          "Rank + (PLUS) Color",
          body.player.rankPlusColor || "NOPE",
          true
        )
 
        .addField("Known Aliases", body.player.knownAliases || "NONE", true)
    let ok4 = new Discord.RichEmbed()
        .setColor("9b7653")
        .setDescription(`${body.player.displayname} Hypixel Level`)
        .setImage(image2);
      if (!body.player.lastLogin)
        return message.channel.send(ok3).then(message.channel.send(ok4))
      if (!body.player.firstLogin) return message.channel.send("NOPE");
      if (!body.player.displayname)
        return message.channel.send("ERROR 404: Uh... UhHHeawewaehwaje");

      let offon = `${body.player.displayname} is offline!`;
      let photo =
        "https://images-ext-1.discordapp.net/external/UdWXoKUsaYCOyvH6nsDk03AdfJVWTK7cyQVvhqpoF3I/https/image.ibb.co/hwheRV/image.png";

      if (body.player.lastLogout < body.player.lastLogin) {
        offon = `${body.player.displayname} is online!`;
        photo =
          "https://images-ext-1.discordapp.net/external/74xyeTgd4BElwkkoe92yB3zEwD1ln4N1rh2zeKxVwt8/https/image.ibb.co/h9VNfq/image.png";
      }


 

      console.log(body);

      let ok = new Discord.RichEmbed()
        .setTitle("Hypixel stats (Minecraft Server)")
        .setColor("9b7653")
        .setDescription(`${body.player.displayname}'s Hypixel stats`)
        .setImage(image)
        .setThumbnail(
          "https://hypixel.net/styles/hypixel-uix/hypixel/platform-pc.png"
        )
        .addField("First Login", date2, true)
        .addField("Last Login", date1, true)
        .addField("Last Logout", date3, true)
        .addField("Display Name", body.player.displayname || "0", true)
        .addField("Package Rank", body.player.newPackageRank || "NON", true)
        .addField("Speical Rank", body.player.rank || "NOPE", true)
        .addField("Network EXP", body.player.networkExp || "0", true)
        .addField("Karma", body.player.karma || "0", true)
        .addField(
          "Rank + (PLUS) Color",
          body.player.rankPlusColor || "NOPE",
          true
        )
        .addField(
          "Most Recent Game Type",
          body.player.mostRecentGameType || "NONE",
          true
        )
        .addField("Known Aliases", body.player.knownAliases || "NONE", true)
        // .addField("Hypixel Forums", here || "NONE", true)
        .setFooter(offon, photo);

      let ok2 = new Discord.RichEmbed()
        .setColor("9b7653")
        .setDescription(`${body.player.displayname} Hypixel Level`)
        .setImage(image2);

      //Ok LOL

      message.channel.send(ok);
      message.channel.send(ok2);
    




  
  });
} else {
  let ok3 = new Discord.RichEmbed()
.setDescription("You today haven't vote yet. [Vote here](https://top.gg/bot/667975393495613442/vote) to use the command.")
.setColor("BLUE")
  return message.channel.send(ok3)

}
});
    
}
}
