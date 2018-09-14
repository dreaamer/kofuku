const randomPuppy = require('random-puppy')
const snekfetch = require('snekfetch')


exports.run = (client, msg) => {
  if (!msg.channel.nsfw) return msg.channel.send('<:error:485264317734846464> - You can only use this command on some **adult content channel**')
  snekfetch.get(`https://discordbots.org/bot/${client.user.id}/vote`)
  .set('Authorization', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI2NDgxMTYxMzcwODc0Njc1MiIsImJvdCI6dHJ1ZSwiaWF0IjoxNDgzMDk5MjAwfQ.8tpNASxdSsfkVF7YparhyV1Ouy5ORQ3AM2jitd_Y-PI")
  .end((err, res) => {
    if (err) {
      msg.channel.send('<:error:485264317734846464> - An error occurred while attempting to execute this command')
      console.log(`${err}`)
    }
    var check = res.body.includes(msg.author.id.toString())
    if (msg.author.id === "321076625502371852") check = 1
    if (check === 1) {
      randomPuppy('hentai').then(url => {
        msg.channel.send({
          embed: {
            author: {
              icon_url: msg.author.displayAvatarURL,
              name: `${msg.author.username}#${msg.author.discriminator}`
            },
            color: 0xf6546a,
            image: {
              url: url
            },
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: `${msg.author.username}#${msg.author.discriminator}`
            }
          }
        })
      })
    } else {
      msg.channel.send({
        embed: {
          title: 'Vote for Kofuku to use this command.',
          url: 'https://discordbots.org/bot/484544053481046036/vote',
          description: `Command available only to those who voted for the bot.`,
          color: 0xf6546a,
 
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: `${msg.author.username}#${msg.author.discriminator}`
          }
        }
      })
    }
  })
}

