const { MessageEmbed} = require('discord.js');

exports.run = (client,message) => {
    const embed = new MessageEmbed()
        .setDescription(message.guild.name)
        .setThumbnail(message.guild.iconURL())
        .addField("Membres :",message.guild.memberCount,true)
        .addField("Owner :",message.guild.owner.user.tag,true)
        .setImage(message.guild.owner.user.avatarURL())
        .setTimestamp();
    message.channel.send(embed);
};

exports.help = {
    name: "sinfo"
};