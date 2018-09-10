const cleverbot = require("cleverbot.io"),
      cbot = new cleverbot(process.env.CLEVER_1, process.env.CLEVER_2);

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
