module.exports.run = async (bot, message, args) => {
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

module.exports.help = {
  name: "findusers"
}