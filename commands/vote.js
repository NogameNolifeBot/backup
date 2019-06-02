const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;

    let emb = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .setDescription("Vote for NogameNolife if you are impreessed with it") 
    .setTitle("Vote to NogameNolife")
    .addField("Vote here", "[:robot:](https://discordbots.org/bot/574114242052096021)", true)
    .setFooter("NogameNolife Bot", "https://cdn.discordapp.com/avatars/442410451121209365/4272634f3ab276ff263ff16ca3aa560a.png?size=2048")
    .setTimestamp()
    message.channel.send(emb)


}
   exports.help = {
  name: "vote",
  category: "General",
  description: "vote for bot ",
  usage: "vote"
};
