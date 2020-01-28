
module.exports = {
    name: "queue",
    category: "music",
    description: "Queue the music",
     usage: "",
 aliases: ["queuemusic"],
    run: async (client, message, args,ops) => {
      
   let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send('There currently isn\'t any music playing in this guild!');

    let queue = fetched.queue;
    let nowPlaying = queue[0];


    let resp = `__**Now Playing**__\n**${nowPlaying.songTitle}** -- **Requested By:** *${nowPlaying.requester}* -- **Duration:** *${nowPlaying.dur} seconds*\n\n__**Queue**__\n`;

    for (var i = 1; i < queue.length; i++) {
        resp += `${i}. **${queue[i].songTitle}** -- **Requested By:** *${queue[i].requester}* -- **Duration:** *${queue[i].dur} seconds*\n`

    }

    message.channel.send(resp);
    }
}