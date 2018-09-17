var database = require("../../db.js")
const cooldown = new Set()

exports.run = (client, message, args) => {
        if (cooldown.has(message.author.id)) {
    message.channel.send('<:gloock:488829272664965130> - Wait **5** seconds to use this command again.')
  } else {
console.log(`[Lala LOGS CMD] Usaram o comando "profile" - Nome: ${message.author.username} (${message.author.id}) Server: ${message.guild.name} (${message.guild.id}`)
  let user = message.mentions.users.first();

  if (message.mentions.users.size < 1) {

  database.Usuários.findOne({
    "_id": message.author.id
}, function(erro, documento) {

  if (documento) {

    var exp = 350 * documento.level + 1

    message.channel.send({
        "embed": {
          "color": 0xf6546a,
          "thumbnail": {
            "url": message.author.displayAvatarURL
          },
          "author": {
            "name": message.author.username,
            "icon_url": message.author.displayAvatarURL
          },
          "fields": [
            {
              "name": "Level",
              "value": `${documento.level}`,
              "inline": true
            },
            {
              "name": "XP",
              "value": `${documento.xp}/${exp}`,
              "inline": true
            },
            {
              "name": "Rep",
              "value": `${documento.rep}`,
              "inline": true
            },
            {
              "name": "Money",
              "value": `${documento.coins}`,
              "inline": true
            }
          ]
        }
      });

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
  } else {
    database.Usuários.findOne({
      "_id": message.mentions.users.first().id
  }, function(erro, documento) {

      if (documento) {

        var unbug = 350 * documento.level + 1

    message.reply({
        "embed": {
          "color": 0xf6546a,
          "thumbnail": {
            "url": message.mentions.users.first().displayAvatarURL
          },
          "author": {
            "name": message.mentions.users.first().username,
            "icon_url": message.mentions.users.first().displayAvatarURL
          },
          "fields": [
            {
              "name": "Level",
              "value": `${documento.level}`,
              "inline": true
            },
            {
              "name": "XP",
              "value": `${documento.xp}/${unbug}`,
              "inline": true
            },
            {
              "name": "Rep",
              "value": `${documento.rep}`,
              "inline": true
            },
            {
              "name": "Money",
              "value": `${documento.coins}`,
              "inline": true
}
          ]
        }
      });

      } else {

        var pessoa = new database.Usuários({
          _id: message.mentions.users.first().id,
                xp: 0,
                level: 0,
                coins: 0,
                rep: 0,
      })

          pessoa.save()

      }

  })
  }
}

    cooldown.add(message.author.id)
    setTimeout(() => {
      cooldown.delete(message.author.id)
    }, 5000)
  }
