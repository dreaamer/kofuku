const cooldown = new Set()
module.exports.run = async (bot, message, args) => {
      if (cooldown.has(message.author.id)) {
    message.channel.send('<:gloock:488829272664965130> - Wait **30** seconds to use this command again.')
  } else {
  let users = bot.users;

  let searchTerm = args[0];
  if(!searchTerm) return message.channel.send("Please provide a Search Term!");

  let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));

  let user = matches.map(u => u.tag).join(" **|** ");

      if (user.length < 2000) {
      message.channel.send(`${user}`)
    } else if(user.length >= 2000) {
      message.channel.send('Limit of letters reached');
    }

}

    cooldown.add(message.author.id)
    setTimeout(() => {
      cooldown.delete(message.author.id)
    }, 30000)
  }
