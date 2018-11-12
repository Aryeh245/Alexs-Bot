const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args, prefix) => {
  if 
    (message.content.indexOf(process.env.PREFIX) !== 0) return;

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send("```User Could Not Be Found, Try Again.```");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("```This User Is A Server Admin/Moderator, I Cannot Mute Them```");
  let role = message.guild.roles.find(`name`, "RoyalMute");
  let mreason = args.join(" ").slice(24);
  if(!role){
    try{
      role = await message.guild.createRole({
        name: "RoyalMute",
        color: "RED",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(role, {
          SEND_MESSAGES: false,
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.channel.send("```No Time Was Given, Try Again.```");

  let mutechannel = message.guild.channels.find(`name`, "mod-logs");
  if (!mutechannel) return message.channel.send("```Channel mod-logs Could Not Be Found```")
  
  let muteembed = new Discord.RichEmbed()
  .setColor("GRAY")
  .setTimestamp()
  .setTitle("TheRoyalBot™ Mute Command")
  .addField("➭ Muted User", `${tomute}`, true)
  .addField("➭ Moderator", `<@${message.author.id}>`, true)
  .addField("➭ Mute Time", `${mutetime}`, true)
  .addField("➭ Mute Reason", `${mreason}`, true)
  
  await(tomute.addRole(role.id));
  mutechannel.send(muteembed)
  message.delete()
  message.channel.send("```" + `${tomute.user.username} has been muted.` + "```");

  setTimeout(function(){
    tomute.removeRole(role.id);
    message.channel.send(`☑️ ** *${tomute.user.username} has been unmuted!* **`);
  }, ms(mutetime));

}

module.exports.help = {
  name: "mute"
}
