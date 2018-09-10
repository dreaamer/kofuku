

module.exports.run = async (bot, message, args) => {
console.log(`[Lala LOGS CMD] Usaram o comando "vaporwave" - Nome: ${message.author.username} (${message.author.id}) Server: ${message.guild.name} (${message.guild.id}`)

if(!args[0]) return message.reply("<:error:485264317734846464> - You need to put something to me to talk.");

let msgstring = args.join(" ");

let msgstringVapor = msgstring.split('').join(' ');

String.prototype.toFullWidth = function() {
    return this.replace(/[A-Za-z0-9]/g, function(s) {return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);});
};


message.channel.send(msgstringVapor.toFullWidth());
}

module.exports.help = {
    name: "vaporwave"
}