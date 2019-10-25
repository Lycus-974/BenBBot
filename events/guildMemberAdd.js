module.exports = (client,member) => {
    member.send("Bienvenue sur le serveur " + client.user.tag + " !");
    const channel = client.channels.find(r => r.name === "generale");
    channel.send(`${member} a rejoint le serveur !`);    
};