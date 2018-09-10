const cleverbot = require("cleverbot.io"),
      cbot = new cleverbot("ozoI1GF4UkI29uXh", "sTm9BrpP9iY3rcKbwfB41lZqBaJmsILm");

exports.run = (bot, message, args, Discord, disEmbed) => {
  let msg = args.join(" ");
    if(!msg) return message.reply("<:error:485264317734846464> - Use kf.clever plus your argument.", "<:error:485264317734846464> - Type a message to send");
    message.channel.startTyping();
      cbot.setNick("kofuku");
	  	cbot.create(function(err, session) {
	  	  cbot.ask(args.join(" "), function(err, response) {
	  		  message.channel.send(`<:bot:487077659004764173> - ${response}`);
	  		  message.channel.stopTyping();
			  });
		  });
  
};