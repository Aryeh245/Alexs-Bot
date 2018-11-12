const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    if(message.content.indexOf(process.env.PREFIX)) return;
  
  let embed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setTitle("Welcome to My Server")
  
  message.channel.send(embed)
    
  }

  module.exports.help = {
    name:"welcome"
    
  }
