const os = require('os-utils');

exports.run = (client, message, args) => {  


  String.prototype.toHHMMSS = function () {
      var sec_num = parseInt(this, 10); 
      var hours   = Math.floor(sec_num / 3600);
      var days   = Math.floor(hours / 24);
      var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      var seconds = sec_num - (hours * 3600) - (minutes * 60);
      if (hours   < 10) {hours   = "0"+hours;}
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}
      var time    = "**" + hours+'** hours **'+minutes+'** minutes **'+seconds+'** seconds';
          days > 1 ? time = days+" days " : time = time
      return time;

      message.channel.send(`<:gloock:488829272664965130> - ${os.processUptime().toString().toHHMMSS()}`)
  };
