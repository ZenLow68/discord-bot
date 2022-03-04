const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        
    ]
});

Client.on("ready", () => {
    console.log("bot op")
});

Client.login("OTQ5MzE3MDQyMTExMTIzNDg2.YiImZA.J5FnZGJZSAeHsMPDYnWUI-kli9I")