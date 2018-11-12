const Discord = require ("discord.js");
module.exports.run = async (bot, message, args) => {
  if(message.content.indexOf(process.env.PREFIX)) return;
  
  let embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setTitle("Helping Now!")
  .addField("General", "```welcome, help, hello```", true)
  .addField("Music", "```Coming Soon!```", true)
  .addField("Administrator Only", "```Coming Soon!```", true)
  .addField("Special Commands", "```Coming Soon!```", true)
  
  let respond = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle("Sending You Help In DMS Now!")
  
  message.author.send(embed)
  message.channel.send(respond)
}

module.exports.help = {
  name: "help"
}
