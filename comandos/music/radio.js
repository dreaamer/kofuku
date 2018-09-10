const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");
exports.run = (client, message, args) => {
  console.log(`[Lala LOGS CMD] Usaram o comando "radio" - Nome: ${message.author.username} (${message.author.id}) Server: ${message.guild.name} (${message.guild.id}`)

  if (args.length === 0)
  return message.channel.send("<:error:485264317734846464> - You did not put any radio to play user **kf.list radio** to list the radios!");
    const Animenexus =  "http://radio.animenexus.mx:8000/animenexus"
    const Cocacola = "https://ic.imusicaradios.com.br/brasil.stream.http"
    const Pop = "http://streaming01.hstbr.net:8026/live"
    const EvolutiON = "http://158.69.226.83:9354/stream"

    const streamURL = args.slice(0, args.length).join(" ");


      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => {
            message.channel.send({
        "embed": {
          "description": `<:rd:485561074297470977> - Radio connected successfully! ${streamURL}`,
          "color": 0xf6546a,
          "author": {
            "name": message.author.username,
            "icon_url": message.author.displayAvatarURL
          }
        }
      })
          



        

            connection.playArbitraryInput(`${streamURL}`);
          })
          .catch(console.log);
      } else {
        message.channel.send(`<:error:485264317734846464> - **${message.author.username}** connect to a voice channel.`);
      }
    }
  
  
