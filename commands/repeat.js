exports.run = (client,message,args) => {
    message.channel.send(args.join(" "));
    message.delete()
      .then(message => console.log(`Message suprimé de ${message.author.username} : ${message.content}`))
      .catch(console.error);
};

exports.help = {
  name: "repeat"
};