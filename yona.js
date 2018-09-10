const Discord = require('discord.js')
var os  = require('os-utils');
const { prefixo, dono } = require('./config.json')
const config = require('./config.json')
const database = require("./db.js");
const lala = new Discord.Client();
const token = process.env.BOT_TOKEN

lala.login(token)

lala.on("ready", () => {
	console.log(`Server(s) - ${lala.guilds.size}\nCanais - ${lala.channels.size}\nUsuário(s) - ${lala.users.size}`)
	lala.user.setActivity(`${lala.user.username} - ${lala.guilds.size} serves`)
})

lala.on("guildCreate", guild => {
	console.log(`Entrei no server '${guild.name}' com ${guild.memberCount} membros`)
	lala.user.setActivity(`${lala.user.username} - ${lala.guilds.size} serves`)
})

lala.on("guildDelete", guild => {
	console.log(`Fui removida do server '${guild.name}' - ${guild.id}`)
	lala.user.setActivity(`${lala.user.username} - ${lala.guilds.size} serves`)
})

lala.on("message", message => {

    let usuario = message.mentions.users.first() ? message.mentions.users.first() : message.author

    if(usuario.bot) return;
    if(message.channel.type == "dm") return;
    if(!message.content.startsWith(config.prefixo)) return;

    database.Usuários.findOne({
        "_id": usuario.id
    }, function (erro, documento) {

        if(documento) {

            if(documento.ban) {
                var desenvolvedores = ["321076625502371852"]
                if(!desenvolvedores.includes(message.author.id)) {
                message.reply(resposta).then((value) => {
                    setTimeout(() => {
                        value.delete();
                    }, 4000);
                });
            } else {

                let command = message.content.split(" ")[0];
                command = command.slice(config.prefixo.length);

                let args = message.content.split(" ").slice(1);

                try {
                    let commandFile = require(`./comandos/music/${command}.js`);
                    commandFile.run(lala, message, args);
                } catch(err) {
                    console.error("[Lala ERROR] " + err);
                }
            }
            } else {

                let command = message.content.split(" ")[0];
                command = command.slice(config.prefixo.length);

                let args = message.content.split(" ").slice(1);

                try {
                    let commandFile = require(`./comandos/music/${command}.js`);
                    commandFile.run(lala, message, args);
                } catch(err) {
                    console.error("[Lala ERROR] " + err);
                }

            }

        } else {
            var pessoa = new database.Usuários({
                _id: usuario.id,
                xp: 0,
                level: 0,
                coins: 0,
                rep: 0,
            })

            pessoa.save()
        }

    })

});

lala.on("message", message => {

    let usuario = message.mentions.users.first() ? message.mentions.users.first() : message.author

    if(usuario.bot) return;
    if(message.channel.type == "dm") return;
    if(!message.content.startsWith(config.prefixo)) return;

    database.Usuários.findOne({
        "_id": usuario.id
    }, function (erro, documento) {

        if(documento) {

            if(documento.ban) {
                var desenvolvedores = ["321076625502371852"]
                if(!desenvolvedores.includes(message.author.id)) {
                message.reply(resposta).then((value) => {
                    setTimeout(() => {
                        value.delete();
                    }, 4000);
                });
            } else {

                let command = message.content.split(" ")[0];
                command = command.slice(config.prefixo.length);

                let args = message.content.split(" ").slice(1);

                try {
                    let commandFile = require(`./comandos/image/${command}.js`);
                    commandFile.run(lala, message, args);
                } catch(err) {
                    console.error("[Lala ERROR] " + err);
                }
            }
            } else {

                let command = message.content.split(" ")[0];
                command = command.slice(config.prefixo.length);

                let args = message.content.split(" ").slice(1);

                try {
                    let commandFile = require(`./comandos/image/${command}.js`);
                    commandFile.run(lala, message, args);
                } catch(err) {
                    console.error("[Lala ERROR] " + err);
                }

            }

        } else {
            var pessoa = new database.Usuários({
                _id: usuario.id,
                xp: 0,
                level: 0,
                coins: 0,
                rep: 0,
            })

            pessoa.save()
        }

    })

});

lala.on("message", message => {

    let usuario = message.mentions.users.first() ? message.mentions.users.first() : message.author

    if(usuario.bot) return;
    if(message.channel.type == "dm") return;
    if(!message.content.startsWith(config.prefixo)) return;

    database.Usuários.findOne({
        "_id": usuario.id
    }, function (erro, documento) {

        if(documento) {

            if(documento.ban) {
                var desenvolvedores = ["321076625502371852"]
                if(!desenvolvedores.includes(message.author.id)) {
                message.reply(resposta).then((value) => {
                    setTimeout(() => {
                        value.delete();
                    }, 4000);
                });
            } else {

                let command = message.content.split(" ")[0];
                command = command.slice(config.prefixo.length);

                let args = message.content.split(" ").slice(1);

                try {
                    let commandFile = require(`./comandos/fun/${command}.js`);
                    commandFile.run(lala, message, args);
                } catch(err) {
                    console.error("[Lala ERROR] " + err);
                }
            }
            } else {

                let command = message.content.split(" ")[0];
                command = command.slice(config.prefixo.length);

                let args = message.content.split(" ").slice(1);

                try {
                    let commandFile = require(`./comandos/fun/${command}.js`);
                    commandFile.run(lala, message, args);
                } catch(err) {
                    console.error("[Lala ERROR] " + err);
                }

            }

        } else {
            var pessoa = new database.Usuários({
                _id: usuario.id,
                xp: 0,
                level: 0,
                coins: 0,
                rep: 0,
            })

            pessoa.save()
        }

    })

});

lala.on("message", message => {

    let usuario = message.mentions.users.first() ? message.mentions.users.first() : message.author

    if(usuario.bot) return;
    if(message.channel.type == "dm") return;
    if(!message.content.startsWith(config.prefixo)) return;

    database.Usuários.findOne({
        "_id": usuario.id
    }, function (erro, documento) {

        if(documento) {

            if(documento.ban) {
                var desenvolvedores = ["321076625502371852"]
                if(!desenvolvedores.includes(message.author.id)) {
                message.reply(resposta).then((value) => {
                    setTimeout(() => {
                        value.delete();
                    }, 4000);
                });
            } else {

                let command = message.content.split(" ")[0];
                command = command.slice(config.prefixo.length);

                let args = message.content.split(" ").slice(1);

                try {
                    let commandFile = require(`./comandos/games/${command}.js`);
                    commandFile.run(lala, message, args);
                } catch(err) {
                    console.error("[Lala ERROR] " + err);
                }
            }
            } else {

                let command = message.content.split(" ")[0];
                command = command.slice(config.prefixo.length);

                let args = message.content.split(" ").slice(1);

                try {
                    let commandFile = require(`./comandos/games/${command}.js`);
                    commandFile.run(lala, message, args);
                } catch(err) {
                    console.error("[Lala ERROR] " + err);
                }

            }

        } else {
            var pessoa = new database.Usuários({
                _id: usuario.id,
                xp: 0,
                level: 0,
                coins: 0,
                rep: 0,
            })

            pessoa.save()
        }

    })

});

lala.on("message", message => {

    let usuario = message.mentions.users.first() ? message.mentions.users.first() : message.author

    if(usuario.bot) return;
    if(message.channel.type == "dm") return;
    if(!message.content.startsWith(config.prefixo)) return;

    database.Usuários.findOne({
        "_id": usuario.id
    }, function (erro, documento) {

        if(documento) {

            if(documento.ban) {
                var desenvolvedores = ["321076625502371852"]
                if(!desenvolvedores.includes(message.author.id)) {
                message.reply(resposta).then((value) => {
                    setTimeout(() => {
                        value.delete();
                    }, 4000);
                });
            } else {

                let command = message.content.split(" ")[0];
                command = command.slice(config.prefixo.length);

                let args = message.content.split(" ").slice(1);

                try {
                    let commandFile = require(`./comandos/info/${command}.js`);
                    commandFile.run(lala, message, args);
                } catch(err) {
                    console.error("[Lala ERROR] " + err);
                }
            }
            } else {

                let command = message.content.split(" ")[0];
                command = command.slice(config.prefixo.length);

                let args = message.content.split(" ").slice(1);

                try {
                    let commandFile = require(`./comandos/info/${command}.js`);
                    commandFile.run(lala, message, args);
                } catch(err) {
                    console.error("[Lala ERROR] " + err);
                }

            }

        } else {
            var pessoa = new database.Usuários({
                _id: usuario.id,
                xp: 0,
                level: 0,
                coins: 0,
                rep: 0,
            })

            pessoa.save()
        }

    })

});

var xpCol = new Set()
let xpRDM = Math.round(Math.random() * 35)
let coinsRDM = Math.round(Math.random() * 45)


lala.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return
                if(xpCol.has(message.author.id)) return;
                database.Usuários.findOne({
                    "_id": message.author.id
                }, function (erro, documento) {
                    if(documento) {
                        if(documento.ban) {} else {
                            var unbug = 370 * documento.level + 1
                            if(documento.xp > unbug) {
                                documento.xp += xpRDM
                                documento.coins += coinsRDM
                                documento.level += 1
                                let up = new Discord.RichEmbed()
                                .setDescription(`<:tadaa:488472682870997003> - Congratulations **${message.author}**, you went up to level **${documento.level}**!`)
                                .setColor(0xf6546a)

                                message.channel.send(up).then(msg => {msg.delete(6000)})
                            
                                documento.xp = 0
                                documento.save()
                                xpCol.add(message.author.id)
                                setTimeout(function () {
                                    xpCol.delete(message.author.id)
                                }, 30 * 1000)
                            } else {
                                documento.xp += xpRDM
                                documento.coins += coinsRDM
                                documento.save()
                                xpCol.add(message.author.id)
                                setTimeout(function () {
                                    xpCol.delete(message.author.id)
                                }, 30 * 1000)
                            }
                        }
                    } else {
                        var pessoa = new database.Usuários({
                            _id: message.author.id,
                		xp: 0,
                		level: 0,
                		coins: 0,
                		rep: 0,
                        })

                        pessoa.save()
                    }
                })
            })


async function getEval(message, args) {
    if(message.content.includes("token")) return message.channel.send(`${message.author.username} i can't show my token`);
    if(message.content.includes("TOKEN")) return message.channel.send(`${message.author.username} i can't show my token`);
    let code = args.join(' ');

    try {
        let evaled = await eval(code);

        if(evaled === null) evaled = 'null';
        if(evaled === undefined) evaled = 'undefined';

        var msg12 = `${evaled}`

                                message.channel.send({
            "embed": {
              "description": `<:correct:485264744685764611> - I successfully performed the function.\n\`\`\`js\n[' ${evaled} ']\`\`\``,
              "color": 0xf6546a
            }
          });

    } catch(err) {
                        message.channel.send({
            "embed": {
              "description": `<:error:485264317734846464> - An error occurred while attempting to perform this function.\n\`\`\`js\n[' ${err} ']\`\`\``,
              "color": 0xf6546a
            }
          });
    }


}

lala.on('message', message => {
    if(message.content.startsWith(prefixo + 'eval') || message.content.startsWith(prefixo + 'eval')) {
        var args = message.content.split(' ').slice(1)

        if(message.author.id === '321076625502371852') {
            getEval(message, args);
        } else {
            message.channel.send(`**${message.author.username}**, you're not allowed.`)
        }
    }
});







