const { MessageEmbed} = require('discord.js');
const fetch = require("node-fetch");

exports.run = async (client,message,args) => {
    message.delete({ timeout : 1000})
      .then(message => console.log(`Message suprimé de ${message.author.username} : ${message.content}`))
      .catch(console.error);
    
    if (args[0] === "cat") {
        const cat = await fetch ("http://aws.random.cat/meow")
            .then(res => res.json())
            .then(json => json.file);
        
        const embed = new MessageEmbed()
            .setImage(cat)
            .setFooter("Powered by 'http://aws.random.cat/meow'");
            message.channel.send(embed);
    } else if (args[0] === "dog") {
        const dog = await fetch ("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(json => json.message);
        
        const embed = new MessageEmbed()
            .setImage(dog)
            .setFooter("Powered by 'https://dog.ceo/api/breeds/image/random'");
        message.channel.send(embed);
    } else if (args[0] === "fox") {
        const fox = await fetch ("https://randomfox.ca/floof/")
            .then(res => res.json())
            .then(json => json.image);
        
        const embed = new MessageEmbed()
            .setImage(fox)
            .setFooter("Powered by 'https://randomfox.ca/floof/'");
            message.channel.send(embed);
    } else {
        message.channel.send("Les animaux disponibles: cat,dog, fox !");
    }
};

exports.help = {
    name: "animals"
};