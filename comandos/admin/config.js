var database = require("../../db.js")

exports.run = (client, message, args) => {


    let r = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');

    var dev = ["321076625502371852"]

    if (!dev.includes(message.author.id) & !message.member.hasPermission(["MANAGE_GUILD"]))
    return message.channel.send("<:correct:485264744685764611> - You are not allowed to configure the bot");

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {

        if (documento) {

            if (!r.length < 1) {

                if (message.content.startsWith("kf.config level")) {
                    if(documento.leveis){
                        documento.leveis = false
                        documento.save()
                        message.channel.send("<:correct:485264744685764611> - Level system off.");
                    } else {
                        documento.leveis = true
                        documento.save()
                        message.channel.send("<:correct:485264744685764611> - Level system activated.");
                    }
                }

                if (message.content.startsWith("kf.config coins")) {
                    if(documento.coins){
                        documento.coins = false
                        documento.save()
                        message.channel.send("<:correct:485264744685764611> - Coins system off.");
                    } else {
                        documento.coins = true
                        documento.save()
                        message.channel.send("<:correct:485264744685764611> - Coins system activated.**");
                    }
                }



            } else {
                message.channel.send({
                    "embed": {
                                  "author": {
                                  "name": `Bot system configuration`,
                                  "icon_url": client.user.displayAvatarURL
          }, 
                      "description": `Use kf.config (systems) to **activate/deactivate**.`,
                      "color": 0xf6546a,
                      "timestamp": new Date(),
                      "footer": {
                        "icon_url": message.author.displayAvatarURL,
                        "text": message.author.username
                      },
                                "fields": [
            {
              "name": "Level",
              "value": `${documento.leveis}`.replace('true', 'Online').replace('false', 'Offline'),
              "inline": true
            },
            {
              "name": "Coins",
              "value": `${documento.coins}`.replace('true', 'Online').replace('false', 'Offline'),
              "inline": true
            }
          ]
                    }
                  });
            }

        } else {

            var servidor = new database.Guilds({
                _id: message.guild.id,
                leveis: true,
                coins: true,

            })
            servidor.save()
            message.channel.send("Use the command again!");

        }

    })

}
