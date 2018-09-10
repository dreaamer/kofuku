
exports.aliases = ["radio"];
exports.run = (client, message, args) => {
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
  
  