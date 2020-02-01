const fs = require("fs")
   var Discord = require('discord.js');
    var db = require('quick.db')



module.exports = {
    name: "warn",
    category: "moderation",
    description: "Warn ppl",
     usage: "<ppl> <reason>",

    run: async (client, message, args,ops,guildconf,dsettings) => {
      

 


    try {
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Sorry, but you do not have valid permissions! If you believe this is an error, contact an owner.", {

    })
  client.settings.ensure(message.guild.id, dsettings);
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!args[0]) return message.channel.send('Please specify a person & reason for the warn!')

    let reason = message.content.split(" ").slice(2).join(" ");
    if (!reason) return message.channel.send('Please specify a person & reason for the warn!')

    const casenumbers = new db.table('CASENUMBERs')
    const guildcasenumber = await casenumbers.fetch(`case_${message.guild.id}`)
    const a = guildcasenumber
    const b = a + 1
    casenumbers.set(`case_${message.guild.id}`, b)
    //  console.log(guildcasenumber)
    const numberwarn = new db.table('WARNNUMBERs')
    const num1 = await numberwarn.fetch(`user_${user.id}_${message.guild.id}`)
    const y = 1
    const m = y + num1
    numberwarn.set(`user_${user.id}_${message.guild.id}`, m)
    // console.log(num1)


    if(!guildcasenumber == Number) {
        casenumbers.set(`case_${message.guild.id}`, 1)
    }

    if(!num1 == Number) {
        db.set(`user_${user.id}_${message.guild.id}`, 1)
    }

    let modlog = message.guild.channels.find("name", client.settings.get(message.guild.id, "modLogChannel"))
           if(!modlog) return message.channel.send("If you need log, plz type epic>setconf modLogChannel <value(Channel Name NOT #something)>")

    
        //user.kick({ reason: `${reason}`})
        const userwarn = new db.table('USERWARNINGs')
        const num2 = await numberwarn.fetch(`user_${user.id}_${message.guild.id}`)
        const warns = await userwarn.fetch(`warn_${user.id}_${num2}_${message.guild.id}`)
        userwarn.set(`warn_${user.id}_${num2}_${message.guild.id}`, reason)

    if (user) {

        if (!user) return message.channel.send("Couldn't find user.")
      
        if (user.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.channel.send("The user you are trying to warn is either an Admin or someone who has Administration Rights")
    

        if (num2 == 3){
            const kickEmbed = new Discord.RichEmbed()
            .setAuthor('Warn')
            .setDescription(`**Case Number**: ${guildcasenumber}\n\nUser <@${user.id}> Has Been Kicked Due To Recieving 3 Warnings.\n**Reason**: ${reason}`)
            .setColor('DARK_RED')
            .setTimestamp()
            .setThumbnail(user.displayAvatarURL)
            .setFooter(`Staff UID ${mod.id} | Staff User ${mod.tag}`)
            modlog.send(kickEmbed).catch(() => message.reply("Cannot post in your mod-log! Have you set my permissions correctly?"));
         
        user.send(`You have been warned & kicked in ${message.guild.name}\n**Reason**: ${reason}\n\nTotal Warnings: ${num2}`) .catch(() => message.reply("Cannot Send Direct Message To "+user));
        message.guild.member(user).kick(reason)
        } else if (num2 >= 4) {
            const banEmbed = new Discord.RichEmbed()
            .setAuthor('Warn')
            .setDescription(`**Case Number**: ${guildcasenumber}\n\nUser <@${user.id}> Has Been Banned Due To Recieving 4 Warnings.\n**Reason**: ${reason}`)
            .setColor('DARK_RED')
            .setTimestamp()
            .setThumbnail(user.displayAvatarURL)
            .setFooter(`Staff UID: ${mod.id} | Staff User: ${mod.tag}`)
            modlog.send(banEmbed).catch(() => message.reply("Cannot post in your mod-log! Have you set my permissions correctly?"));
          
        numberwarn.set(`user_${user.id}_${message.guild.id}`, 0)
        message.guild.member(user).ban(reason).catch(() => message.reply("Cannot Ban "+user+ "! Give me permissions!"));
        } else {

        const warnEmbed = new Discord.RichEmbed()
            .setAuthor('Warn')
            .setDescription(`**Case Number**: ${guildcasenumber}\n\nUser <@${user.id}> Has Been Warned\n**Reason**: ${reason}\n\nTotal Warnings: ${num2}`)
            .setColor('DARK_RED')
            .setTimestamp()
            .setThumbnail(user.displayAvatarURL)
            .setFooter(`Staff UID: ${mod.id} | Staff User: ${mod.tag}`)
        modlog.send(warnEmbed).catch(() => message.reply("Cannot post in your mod-log! Have you set my permissions correctly?"));
       
        user.send(`You have been warned in ${message.guild.name}, Total Warnings: ${num2}\n**Reason**: ${reason}`) .catch(() => message.reply("Cannot Send Direct Message To "+user));
        }}
    }catch(err) {console.log(`Error with Warnings ${err}`)}
    }
}
