const cooldown = new Set()
exports.aliases = ["radio"];
exports.run = (client, message, args) => {
          if (cooldown.has(message.author.id)) {
    message.channel.send('<:gloock:488829272664965130> - Wait **5** seconds to use this command again.')
  } else {
  console.log(`[Lala LOGS CMD] Usaram o comando "list" - Nome: ${message.author.username} (${message.author.id}) Server: ${message.guild.name} (${message.guild.id}`)

message.reply("DM")
            message.author.send({
        "embed": {
          "description": `Animenexus - http://radio.animenexus.mx:8000/animenexus\nCocacola - https://ic.imusicaradios.com.br/brasil.stream.http\nPop - http://streaming01.hstbr.net:8026/live\nEvolutiON - http://158.69.226.83:9354/stream`,
          "color": 0xf6546a,
          "author": {
            "name": message.author.username,
            "icon_url": message.author.displayAvatarURL
          }
        }
      })
    }
        cooldown.add(message.author.id)
    setTimeout(() => {
      cooldown.delete(message.author.id)
    }, 5000)
  }
  
