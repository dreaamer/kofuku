
const Discord = require('discord.js');
var Jimp = require("jimp");
const cooldown = new Set()

exports.run = (client, message, args) => {
          if (cooldown.has(message.author.id)) {
    message.channel.send('<:gloock:488829272664965130> - Wait **5** seconds to use this command again.')
  } else {
    console.log(`[Lala LOGS CMD] Usaram o comando "hex" - Nome: ${message.author.username} (${message.author.id}) Server: ${message.guild.name} (${message.guild.id}`)

    let usuario = message.mentions.users.first() ? message.mentions.users.first() : message.author
    

              message.channel.startTyping();
                        Jimp.read("https://cdn.discordapp.com/attachments/475050878903255053/485285939812368386/Sem_Titulo-1.png", function (erre, img) {
                                Jimp.read(`${usuario.avatarURL}`).then(function (avatar) {
                                            Jimp.read("https://thearmchairradical.files.wordpress.com/2016/10/discord-logo.png").then(function (mascara) {
                                                avatar.resize(500, 500);
                                                mascara.resize(500, 500);
                                                avatar.mask(mascara, 0, 0);
                                                avatar.getBuffer(Jimp.MIME_PNG, (erri, buffer) => {
                                                    message.channel.send(`**${usuario.username}'s** discord avatar.`, new Discord.Attachment(buffer, 'ball.png'));
                                                    message.channel.stopTyping();
                                                })
                                            })
                                        })
                                    })
                            }

                                cooldown.add(message.author.id)
    setTimeout(() => {
      cooldown.delete(message.author.id)
    }, 5000)
  }
                
