const { Client} = require('discord.js');
const { TOKEN, PREFIX } = require("./config");
const client = new Client();



client.on('message', msg => {
  //br
  if (msg.author.bot) return;
  if (msg.content.indexOf(PREFIX) !== 0 ) return;
  const args = msg.content.splice(PREFIX.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd === "repeat") {
    msg.channel.send(args.join(" "));
    msg.delete()
      .then(msg => console.log(`Message suprimé de ${msg.author.username} : ${msg.content}`))
      .catch(console.error);
  }

  if (cmd === "role") {
    const role = msg.guild.roles.find(r => r.name === args[0]);
    if (!role) return msg.channel.send("Ce role n'existe pas !"); //Si le role n'existe pas sur le serveur
    if (msg.member.roles.find(r => r.name ===args[0])) {           // si le role est déjà présent sur l'utilisateur
      msg.member.roles.remove(role);                               // Je lui retire le role
      msg.channel.send(`J'ai supprimer de le role ${role} à ${msg.author}`)
    } else {                                                      //sinon je lui attribue
      msg.member.roles.add(role);
      msg.channel.send(`${msg.author} possede à présent le role ${role} !`);
    }
  }

});

client.on ('guildMemberAdd', member => {
  member.send("Bienvenue sur le serveur " + client.user.tag + " !");
  const channel = client.channels.find(r => r.name === "generale");
  channel.send(`${member} a rejoint le serveur !`);
})

client.login(TOKEN);

client.on("ready", () => console.log("Je suis prêt !"));
client.on("error", () => console.error);
client.on("warm", () => console.warn);
client.on("debug", () => console.log);