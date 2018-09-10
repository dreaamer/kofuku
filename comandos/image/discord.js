const Discord = require('discord.js');
var Jimp = require("jimp");

exports.run = (client, message, args) => {
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
                