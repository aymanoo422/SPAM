const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("627910336154042368")
setInterval(function() {
channel.send(`627880182912647224 قاعد اكرر الكلام مرة و مرة عشان الكريدتس :joy: :yum: :weary: :poop: :joy: :yum: :weary: :poop: :joy: :yum: :weary: :poop: `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
