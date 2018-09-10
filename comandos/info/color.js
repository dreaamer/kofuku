const c2c = require('colorcolor')

const Discord = require('discord.js')

exports.run = (client, msg, args) => {
  const color = args.join(' ')
  
  msg.channel.send({
    embed: {
      author: {
        icon_url: msg.author.displayAvatarURL,
        name: `${msg.author.username}#${msg.author.discriminator}`
      },
      color: 0xf6546a,
      footer: {
        icon_url: client.user.avatarURL,
        text: `${msg.author.username}`
      },
      timestamp: new Date(),
      fields: [
        {
          name: 'Hex',
          value: c2c(color, 'hex'),
          inline: true
        },
        {
          name: 'RGBA',
          value: c2c(color, 'rgba'),
          inline: true
        },
        {
          name: 'HSLA',
          value: c2c(color, 'hsla'),
          inline: true
        },
        {
          name: 'HSV',
          value: c2c(color, 'hsv'),
          inline: true
        }
      ]
    },
  })
}

exports.help = {
  name: 'color',
  description: 'Convert a color.',
  usage: 'color <color>',
  fullDesc: 'Convert a color.',
  type: 'util',
  status: 2
}