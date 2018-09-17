const Discord = require('discord.js');
const request = require('request');
const cheerio = require('cheerio');
const cooldown = new Set()

exports.run = (client, message, args) => {

      if (cooldown.has(message.author.id)) {
    message.channel.send('<:gloock:488829272664965130> - Wait **5** seconds to use this command again.')
  } else {
  console.log(`[Lala LOGS CMD] Usaram o comando "csgo" - Nome: ${message.author.username} (${message.author.id}) Server: ${message.guild.name} (${message.guild.id}`)
  let steamID = args[0];

  if(!steamID) return message.channel.send('*Please provide a valid Steam ID64.*');
  
  var UR_L = `http://csgo.tracker.network/profile/${steamID}`;
  
  request(UR_L, function(err, resp, body) {
    
    $ = cheerio.load(body);
    
    var KD = getStatData(0, message, $);
    var WIN = getStatData(1, message, $);
    var HS = getStatData(4, message, $);
    var MONEY = getStatData(5, message, $);
    var SCORE = getStatData(6, message, $);
    var KILLS = getStatData(7, message, $);
    var DEATHS = getStatData(8, message, $);
    var MVP = getStatData(9, message, $);
    var BS = getStatData(13, message, $);
    var BD = getStatData(14, message, $);
    var HR = getStatData(15, message, $);
    var DOM = getStatData(16, message, $);
    var GAMES = getStatData(2, message, $);
    var WINS = getStatData(3, message, $);
    var PTIME = getStatData(10, message, $);
    var ROUNDS = getStatData(11, message, $);
    var RWINS = getStatData(12, message, $);

    const AA = `${GAMES}` - `${WINS}`

    let csEmbed = new Discord.RichEmbed()
      .setTitle('CSGO Stats')
      .setURL(UR_L)
      .setColor(0xf6546a)
      .addField('Win %', WIN, true)
      .addField('MVPs', MVP, true)
      .addField('Score', SCORE, true)
      .addField('Kills', KILLS, true)
      .addField('Deaths', DEATHS, true)
      .addField('K/D', KD, true)
      .addField('Headshots', HS, true)
      .addField('Dominations', DOM, true)
      .addField('Playtime', PTIME, true)
      .addField('Bomb Stats', `Planted: ${BS} \nDefused: ${BD}`, true)
      .addField('Games', `Total: ${GAMES} \nWins: ${WINS}`, true)
      .addField('Rounds', `Total: ${ROUNDS} \nWins: ${RWINS}`, true)
    
    
    message.channel.send(csEmbed);
  });
  
}

    cooldown.add(message.author.id)
    setTimeout(() => {
      cooldown.delete(message.author.id)
    }, 5000)
  }



function getStatData(location, message , $){

  var selector = $('.stats-stat .value').eq(location).text();

  var stat_array = $.parseHTML(selector);

  var stat = 0;

  if(stat_array == null || stat_array.lengh == 0){
    message.channel.send("Invalid User");
    return " ";
  }else{
    stat = stat_array[0].data;
  }

  return stat;
}
