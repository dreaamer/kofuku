exports.run = (client, message, args) => {
  console.log(`[Lala LOGS CMD] Usaram o comando "avatar" - Nome: ${message.author.username} (${message.author.id}) Server: ${message.guild.name} (${message.guild.id}`)

    let user = message.mentions.users.first();
    let razaou = args.slice(0).join(' ');

    if (!razaou.length < 1) {

        if (message.mentions.users.size < 1) {

            if(client.users.get(args[0])){
                message.channel.send({
                    "embed": {
                      "description": `**${client.guilds.get(message.guild.id).members.get(args[0]).user.username}'s avatar**`,
                      "color": 0xf6546a,
                      "timestamp": new Date(),
                      "footer": {
                        "icon_url": message.author.displayAvatarURL,
                        "text": message.author.username
                      },
                      "image": {
                        "url": client.guilds.get(message.guild.id).members.get(args[0]).user.displayAvatarURL
                      }
                    }
                  });
            } else {
                if(client.guilds.get(message.guild.id).members.filter(mem=>{mem.displayName != message.content.replace("kf.avatar ", "")})){
                    message.channel.send({
                        "embed": {
                          "description": `${client.guilds.get(message.guild.id).members.filter(mem=>{mem.displayName != message.content.replace("kf.avatar ", "")}).user.username}'s avatar**`,
                          "color": 0xf6546a,
                          "timestamp": new Date(),
                          "footer": {
                            "icon_url": message.author.displayAvatarURL,
                            "text": message.author.username
                          },
                          "image": {
                            "url": client.guilds.get(message.guild.id).members.filter(mem=>{mem.displayName != message.content.replace("kf.avatar ", "")}).user.displayAvatarURL
                          }
                        }
                      });
                } else {
                    message.reply("OPS");
                }
            }

        } else {
            message.channel.send({
                "embed": {
                  "description": `**${message.mentions.users.first().username}'s avatar**`,
                  "color": 0xf6546a,
                  "timestamp": new Date(),
                  "footer": {
                    "icon_url": message.author.displayAvatarURL,
                    "text": message.author.username
                  },
                  "image": {
                    "url": message.mentions.users.first().displayAvatarURL
                  }
                }
              });
        }

    } else {
        message.channel.sendMessage({
            "embed": {
              "description": `**${message.author.username}'s avatar**`,
              "color": 0xf6546a,
              "timestamp": new Date(),
              "footer": {
                "icon_url": message.author.displayAvatarURL,
                "text": message.author.username
              },
              "image": {
                "url": message.author.displayAvatarURL
              }
            }
          });
    }

}