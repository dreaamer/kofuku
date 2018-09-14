const cooldown = new Set()

module.exports.run = async (bot, message, args) => {

	  if (cooldown.has(message.author.id)) {
    message.channel.send('<:gloock:488829272664965130> - Wait **30** seconds to use this command again.')
  } else {
console.log(`[Lala LOGS CMD] Usaram o comando "vaporwave" - Nome: ${message.author.username} (${message.author.id}) Server: ${message.guild.name} (${message.guild.id}`)

if(!args[0]) return message.reply("<:error:485264317734846464> - You need to put something to me to talk.");

let msgstring = args.join(" ");

let msgstringVapor = msgstring.split('').join(' ');

String.prototype.toFullWidth = function() {
    return this.replace(/[A-Za-z0-9]/g, function(s) {return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);});
};


message.channel.send(msgstringVapor.toFullWidth());
}

    cooldown.add(message.author.id)
    setTimeout(() => {
      cooldown.delete(message.author.id)
    }, 30000)
  }


module.exports.help = {
    name: "vaporwave"
}
