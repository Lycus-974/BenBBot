module.exports = (client,member) => {
    const channel = client.channels.find(r => r.name === "generale");
    channel.send(`Salut à ${member}, Bienvenue parmi nous  :tada::hugging: !`);    
};