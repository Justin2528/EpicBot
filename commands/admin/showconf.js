module.exports = {
    name: "showconf",
    category: "admin",
    description: "show the config (no need perms to access but still)",

    run: async (client, message, args,ops,guildconf,dsettings) => {
          let configProps = Object.keys(guildconf).map(prop => {
      return `${prop}  :  ${guildconf[prop]}\n`;
    });
    message.channel.send(`The following are the server's current configuration:
    \`\`\`${configProps}\`\`\``);

    }
}
