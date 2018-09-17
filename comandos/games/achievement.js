const cooldown = new Set()

exports.run = (client, message, args) => {

      if (cooldown.has(message.author.id)) {
    message.channel.send('<:gloock:488829272664965130> - Wait **5** seconds to use this command again.')
  } else {
	try {
    	let [titulo, desc] = args
    if (!desc) {
      	[titulo, desc] = ['Achievement Get!', titulo]
    }

    let ronaldo = Math.floor((Math.random() * 39) + 1)
    if (args.join(' ').toLowerCase().includes('burn')) ronaldo = 38
    if (args.join(' ').toLowerCase().includes('cookie')) ronaldo = 21
    if (args.join(' ').toLowerCase().includes('cake')) ronaldo = 10

    if (titulo.length > 20 || desc.length > 20) return message.channel.send('<:error:485264317734846464> - Maximum of 20 letters reached.')
    const ac = `https://www.minecraftskinstealer.com/achievement/a.php?i=${ronaldo}&h=${encodeURIComponent(titulo)}&t=${encodeURIComponent(desc)}`
    message.channel.send({
      embed: {
        description: `Congratulations **${message.author.username}** you got an achievement`,
        color: 0xf6546a,
        image: {
          url: ac
        }
      }
    })
  } catch (err) {
    console.log(`[Achievement.js] - ${err}`)
  }
}
	
	    cooldown.add(message.author.id)
    setTimeout(() => {
      cooldown.delete(message.author.id)
    }, 5000)
  }
