const Kitsu                                 = require('kitsu.js');
const kitsu                                 = new Kitsu();
exports.run = (client, msg, params) => {
  console.log(`[Lala LOGS CMD] Usaram o comando "anime" - Nome: ${msg.author.username} (${msg.author.id}) Server: ${msg.guild.name} (${msg.guild.id}`)
    if (params.length < 1) return msg.reply('<:error:485264317734846464> - You must add a anime to search for.');
    msg.channel.send("*fetching information*").then(message => {
    kitsu.searchAnime(params.join(" "))
      .then(result => {
          const filter = message => {
            if(message.content === "1" || message.content === "2" || message.content === "3" || message.content === "4" || message.content === "5") {
              return true
            } else {
              return false
            }
          }
          message.edit({
            "embed": {
              "footer": {
                "icon_url": message.author.displayAvatarURL,
                "text": message.author.username
              },
              "description": `**Okay i found 5 possible matches which do you want to see?** (just write the first number, it will be canceled after **60** seconds)\n\n1: ${result[0].titles.english}/${result[0].titles.japanese}\n2: ${result[1].titles.english}/${result[1].titles.japanese}\n3: ${result[2].titles.english}/${result[2].titles.japanese}\n4: ${result[3].titles.english}/${result[3].titles.japanese}\n5: ${result[4].titles.english}/${result[4].titles.japanese}`,
              "color": 0xf6546a
            }
          })

          msg.channel.awaitMessages(filter, {
              "max": 20,
              "maxMatches": 1,
              "time": 60000,
              "errors": ['time']
              }
            ).then(message => {
                if (message.size === 0) return
                const number = Number(message.first().content) - 1
                if (`${result[number].synopsis}` > 1024) return msg.reply('I could not send the anime info because the synopsis goes from 1024 letters')
                msg.channel.send({
                            "embed": {
                              "color":  0xf6546a,
                              "footer": {
                                "icon_url": msg.author.displayAvatarURL,
                                "text": msg.author.username
                              },
                              "fields": [
                                {
                                  "name": "Japanese title",
                                  "value": `${result[number].titles.japanese}`,
                                  "inline": true
                                },
                                {
                                  "name": "English title",
                                  "value": `${result[number].titles.english}`,
                                  "inline": true
                                },
                                {
                                  "name": "Type",
                                  "value": `${result[number].showType}`,
                                  "inline": true
                                },
                                {
                                  "name": "Start date",
                                  "value": `${result[number].startDate}`,
                                  "inline": true
                                
                                            },
                                {
                                  "name": "End date",
                                  "value": `${result[number].endDate}`,
                                  "inline": true
                                
                                            },
                                {
                                  "name": "Popularity rank",
                                  "value": `${result[number].popularityRank}`,
                                  "inline": true
                                },
                                {
                                  "name": "Synopsis",
                                  "value": `${result[number].synopsis}`, 
                                  "inline": true
                                              },
                                {
                                  "name": "Anime link",
                                  "value": `[${result[number].titles.english}](https://kitsu.io/anime/${result[number].id})`,
                                  "inline": true
                                }]
                              }
                            })
                          })
                        })
                        
                          

            
            .catch(() => msg.reply("Canceled search due to time"))

        
      .catch(() => {
          message.edit("I had a error while trying to fetch the data from Kitsu Sorry! did you spell the Anime name right?")
          msg.react("❓")
          }
        );
      })
    }
  
