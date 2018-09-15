
const randomPuppy = require('random-puppy')
const snekfetch = require('snekfetch')


exports.run = (client, msg) => {
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


