exports.run = (client, message, args) => {
	console.log(`[Lala LOGS CMD] Usaram o comando "ping" - Nome: ${message.author.username} (${message.author.id}) Server: ${message.guild.name} (${message.guild.id}`)
        message.channel.send({
            "embed": {
              "description": `<:latency:484919068395307009> - My latency is **${client.ping}ms**`,
              "color": 0xf6546a
            }
          });
}