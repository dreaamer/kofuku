exports.run = (bot, msg) => {
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