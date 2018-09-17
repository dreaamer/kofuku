
const randomPuppy = require('random-puppy')
const snekfetch = require('snekfetch')
const cooldown = new Set()

exports.run = (client, msg) => {

      if (cooldown.has(message.author.id)) {
    msg.channel.send('<:gloock:488829272664965130> - Wait **5** seconds to use this command again.')
  } else {
	console.log(`[Lala LOGS CMD] Usaram o comando "hentai" - Nome: ${msg.author.username} (${msg.author.id}) Server: ${msg.guild.name} (${msg.guild.id}`)
  if (!msg.channel.nsfw) return msg.channel.send('<:error:485264317734846464> - You can only use this command on some **adult content channel**')
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
              text: `${client.user.username}`
            }
          }
        })
      })
  }

    cooldown.add(message.author.id)
    setTimeout(() => {
      cooldown.delete(message.author.id)
    }, 5000)
  }


