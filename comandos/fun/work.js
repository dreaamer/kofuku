var database = require("../../db.js")
var dayCol = new Set()
var dayRDM = Math.round(Math.random() * 500)

exports.run = (client, message, args) => {
    console.log(`[Lala LOGS CMD] Usaram o comando "work" - Nome: ${message.author.username} (${message.author.id}) Server: ${message.guild.name} (${message.guild.id}`)
    if (dayCol.has(message.author.id)) return message.channel.send({
            "embed": {
              "description": "<:error:485264317734846464> - Have you worked today.",
              "color": 0xf6546a
            }
          });

    database.Usuários.findOne({
        "_id": message.author.id
    }, function(erro, documento) {
        if (documento) {

            documento.coins += dayRDM
            documento.save()
            message.channel.send({
            "embed": {
              "description": `<:salary:485265703570636800> - You collected **${Number(dayRDM).toLocaleString()}** of your salary.`,
              "color": 0xf6546a
            }
          });
            dayCol.add(message.author.id)
            setTimeout(function() {
                dayCol.delete(message.author.id)
            }, 6 * 1000 * 60 *60)

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

}