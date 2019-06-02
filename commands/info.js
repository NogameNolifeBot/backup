const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {   
  let embed = new Discord.RichEmbed()
    .setTitle("Information")
    .setColor(0xba4b5b)
    .setDescription(" It will tell you what Pokemon spawned is whenever Pokecord spawns one. ")
    .addField("Developer", "Unknown better not to know")
    .addField("Update" , "Should tell names now when shrink mode is enabled")
    .addField("Bot invite link", "https://discordapp.com/oauth2/authorize?client_id=574114242052096021&scope=bot&permissions=8")
            
    .addField("Donate" , "for donors link will be provided \n Donation is to help me host bot 24/7")
    .addField("Contact", "contact developer in case of bot crash \n use `ichi` or `Ngnl~`help contact")
    .addField("Server invite link", "You can still use this in my support server \nhttps://discord.gg/fdRCrQW");
  
  message.channel.send(embed);
   
};

exports.help = {
  name: "info",
  category: "General",
  description: "Get some information about me.",
  usage: "info"
};
