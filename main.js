const { Client} = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NjM2NzQ5ODEzNjQ3NTQwMjI5.XbEKLw.-hSZ0P-o25L5QQ6X5sigm9DGGl8');