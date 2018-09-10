const Discord = require('discord.js');

exports.run = (client, message, args) => {
  console.log(`[Lala LOGS CMD] Usaram o comando "spotify" - Nome: ${message.author.username} (${message.author.id}) Server: ${message.guild.name} (${message.guild.id}`)
  let user = message.mentions.users.first() || message.author; 
  if (user.presence.game !== null && user.presence.game.type === 2 && user.presence.game.name === 'Spotify') {

    let trackIMG = user.presence.game.assets.largeImageURL;
    let trackURL = `https://open.spotify.com/track/${user.presence.game.syncID}`;
    let trackName = user.presence.game.details;
    let trackAuthor = user.presence.game.state;
    let trackAlbum = user.presence.game.assets.largeText;

    let embed = new Discord.RichEmbed()
      .setTitle("<:spotify:485604918061694977> Spotify music information")
      .setColor(0xf6546a)
      .setThumbnail(trackIMG)
      .addField("Song name", trackName, true)
      .addField("Author", trackAuthor, true)
      .addField("Album", trackAlbum, true)
      .addField("Listen", `[${trackAlbum}](${trackURL})`, true)

    message.channel.send(embed);

  } else {
    message.channel.send('<:error:485264317734846464> - The user is not listening to **Spotify!**');
  }
}
