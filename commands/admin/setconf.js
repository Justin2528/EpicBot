module.exports = {
    name: "setconf",
    category: "admin",
    description: "Set Server Config",
     usage: "<config> <value>",

    run: async (client, message, args,ops,guildconf,dsettings) => {
      if(!message.member.hasPermission(0x00000008)) {
  return message.channel.send("You don't have the `Administrator` Perms!")
}
  
      const [prop, ...value] = args;

   if(!args[0]){
 return message.channel.send("INFO: (Settings: modLogChannel (Remember, Say like general and not like #modLog SO MANY PEOPLE MAKE THIS ERROR OK DON'T THINK THIS IS NOTHING BOOMER)) SINCE THIS FEATURE IS IN BETA, Unless you want to type epic>showconf");
    }

       if(!client.settings.has(message.guild.id, prop)) {
      return message.reply("This key is not in the configuration.");
    }

  if(!args[1]){
    return message.channel.send("Value plz?")
  }
  
  
   client.settings.set(message.guild.id, value.join(" "), prop);
  
    message.channel.send(`Guild configuration item ${prop} has been changed to:\n\`${value.join(" ")}\``);

    }
}
