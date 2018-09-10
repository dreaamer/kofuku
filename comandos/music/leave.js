const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");
exports.aliases = ["radio"];
exports.run = (client, message, args) => {
  console.log(`[Lala LOGS CMD] Usaram o comando "leave" - Nome: ${message.author.username} (${message.author.id}) Server: ${message.guild.name} (${message.guild.id}`)

      if (message.member.voiceChannel) {
        message.member.voiceChannel.leave()
                  message.channel.send({
              "embed": {
                "description": '<:rd:485561074297470977> - Radio disconnected successfully!',
                "color":  0xf6546a,
              }
          })
    };
  }



