const Discord = require('discord.js');
let ok1 = require("../../boop.json");
let snekfetch = require("snekfetch");
module.exports = {
    name: "coronastats",
    category: "info",
    description: "Covid-19 stats",
     
 aliases: ["covid19"],
    run: async (client, message, args,ops,guildconf,dsettings) => {

        let chance = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let ok2 = ok1.ads
      let ok3 = ok2[Math.floor(Math.random() * ok2.length)]
         if (chance < 30) {
        message.channel.send(ok3)
         }
   let url = "https://coronavirus-tracker-api.herokuapp.com/all";
 snekfetch.get(url).then(r => {
      let body = r.body;
     let ok = new Discord.RichEmbed()
     .setColor("RED")
.setTitle("COVID-19 (CORONAVIRUS) STATS")
     .setDescription("**ABOUT COVID-19**:\n\n Coronaviruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory illness now called COVID-19 that started in China. \n\n**HOW DOES COVID-19 SPREAD?**\n\nRecent information indicates COVID-19 may be passed from person to person. Community spread is being seen, also. Community spread means people have been infected with the virus in a particular area, including some people who are not sure how or where they became infected. COVID-19 has been detected in people throughout China and in over 100 other countries, including the United States. [SOURCE](https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus)")
     .addField("**CONFIRMED CASES**:", "**" + body.latest.confirmed + "**")
     .addField("**RECOVERED:**",  "**"+ body.latest.recovered+ "**")
     .addField("**DEATHS ☠️:**", "**" + body.latest.deaths+ "**")
     .setFooter("Covid-19 stats from EPICBOT", client.user.displayAvatarURL)
     
     message.channel.send(ok)
 });
    }
}