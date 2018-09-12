const Discord= require('discord.js');
const DBL = require('dblapi.js');

exports.run = (client, message, args) => {
  console.log(`[Lala LOGS CMD] Usaram o comando "dbl" - Nome: ${message.author.username} (${message.author.id}) Server: ${message.guild.name} (${message.guild.id}`)
  let botID = args[0] || "484544053481046036";
  
  const dbl = new DBL('process.env.BOT_DBL', client);
  
  dbl.getBot(botID).then(bot => {
    console.log(bot)
    
    let dblEmbed = new Discord.RichEmbed()
      .setTitle(`<:bot:487077659004764173> Name: ${bot.username}#${bot.discriminator}`)
      .setColor(0xf6546a)
      .setDescription(bot.shortdesc)
      .setImage("https://discordbots.org/api/widget/" + bot.id + ".svg")
      .setURL("https://discordbots.org/bot/" + bot.id)
      .addField('<:owner:486723105214169120> Owner(s) ID', `${bot.owners}`, true)
      .addField('<:push:486724667734884362> Prefix', `${bot.prefix}`, true)
      .addField('<:mpoints:487076065240416276> Monthly Point(s)', `${bot.monthlyPoints}`, true)
      .addField('<:points:487076065735606303> Point(s)', `${bot.points}`, true)
      .addField('<:lib:487076586344939581> Library', `${bot.lib}`, true)
      .addField('<:certified:487084597767569408> Certified Bot?', `${bot.certifiedBot ? 'Yes' : 'No'}`, true)
      .addField('<:guilds:486724107895963650> Servers', `${bot.server_count}`, true)
      .addField('<:web:487084293332402208> Website', `[Website](${bot.website})`, true)
      .addField('<:invite:487084280749621269> Invite', `[Invite](${bot.invite})`, true);


    if (bot.longdesc.length < 1024) {
      dblEmbed.addField('<:dc:487077010384879617> Full Description', bot.longdesc);
    } else if(bot.longdesc.length >= 1024) {
      dblEmbed.addField('<:dc:487077010384879617> Full Description', 'Full description too long, please go to the page by clicking the link provided at the top of this embed!');
    }
    
    message.channel.send(dblEmbed)
  });

}
