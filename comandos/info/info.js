const os = require('os-utils');
const fs = require('fs')
const config = require('../../config.json')

exports.run = (client, message, args, guild) => {

    var dreamer = client.guilds.get("321077526568894465").members.get("321076625502371852").user.tag



    String.prototype.toHHMMSS = function () {
      var sec_num = parseInt(this, 10); 
      var hours   = Math.floor(sec_num / 3600);
      var days   = Math.floor(hours / 24);
      var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      var seconds = sec_num - (hours * 3600) - (minutes * 60);
      if (hours   < 10) {hours   = "0"+hours;}
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}
      var time    = "**" + hours+'** horas **'+minutes+'** minutos **'+seconds+'** segundos';
          days > 1 ? time = days+" dias " : time = time
      return time;
  };
  console.log(`[Lala LOGS CMD] Usaram o comando "info" - Nome: ${message.author.username} (${message.author.id}) Server: ${message.guild.name} (${message.guild.id}`)
    message.channel.send({
        "embed": {
            "author": {
            "name": `Hello ${message.author.username}, my name is ${client.user.username}, I am a simple bot for your discord server.`,
            "icon_url": client.user.displayAvatarURL
          }, 
          "color":  0xf6546a,
          "timestamp": new Date(),
          "footer": {
            "icon_url": message.author.displayAvatarURL,
            "text": message.author.username
          },
          "fields": [
            {
              "name": "<:owner:486723105214169120> Owner(s)",
              "value": `${dreamer}`,
              "inline": true
            },
            {
              "name": "<:cod:486725978790428672> Discord.js",
              "value": "v11.4.2",
              "inline": true
            },
            {
              "name": "<:node:486726553921912832> Node.js",
              "value": "v8.11.4",
              "inline": true
                          },
            {
              "name": "<:db:486723502133608459> Database",
              "value": "Mongoose",
              "inline": true
            },
            {
              "name": "<:latency:484919068395307009> Latency",
              "value": `${client.ping}ms`,
              "inline": true
            
                        },
            {
              "name": "<:users:486723845299109889> Users",
              "value": `${client.users.size}`,
              "inline": true
            
                        },
            {
              "name": "<:guilds:486724107895963650> Guilds",
              "value": `${client.guilds.size}`,
              "inline": true
            },
            {
              "name": "<:ch:486724299139579927> Channels",
              "value": `${client.channels.size}`,
              "inline": true
                                        },
            {
              "name": "<:push:486724667734884362> Prefix",
              "value": `${config.prefixo}`,
              "inline": true
            }

          ]
        }
      });

}


