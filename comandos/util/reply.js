const cooldown = new Set()

exports.run = (bot, msg, args) => {

      if (cooldown.has(msg.author.id)) {
    msg.channel.send('<:gloock:488829272664965130> - Wait **5** seconds to use this command again.')
  } else {
var quote = msg.content.split(" ").slice(1).join(" ");
msg.delete();
if (quote.length < 1) {
    return msg.channel.send("<:error:485264317734846464> - Please specify a message ID.");
}
msg.channel.fetchMessages({
    limit: 1,
    around: quote
}).then(msgs => {
    const r = msgs.first();
    msg.channel.send("", {
        embed: {
            color: 0xf6546a,
            author: {
                name: `${r.author.username} (${r.author.id})`,
                icon_url: r.author.avatarURL
            },
            description: r.content
        }
    });
});

};
    
        cooldown.add(msg.author.id)
    setTimeout(() => {
      cooldown.delete(msg.author.id)
    }, 5000)
  }
