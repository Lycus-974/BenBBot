module.exports = (client,message,args) => {
    const role = message.guild.roles.find(r => r.name === args[0]);
    if (!role) return message.channel.send("Ce role n'existe pas !"); //Si le role n'existe pas sur le serveur
    if (message.member.roles.find(r => r.name ===args[0])) {           // si le role est déjà présent sur l'utilisateur
      message.member.roles.remove(role);                               // Je lui retire le role
      message.channel.send(`J'ai supprimer de le role ${role} à ${message.author}`)
    } else {                                                      //sinon je lui attribue
      message.member.roles.add(role);
      message.channel.send(`${message.author} possede à présent le role ${role} !`);
    }
};