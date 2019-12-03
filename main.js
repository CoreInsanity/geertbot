#!/usr/bin/env node

var Discord = require("discord.js");
var client = new Discord.Client();
var auth = require('./auth.json');
var version = "0.1b";
var dist = "DEV"

//Init
client.login(auth.token);

client.on("ready", () => {
    console.log('client ready');
});

client.on("message", message => {
    if (message.content.toLowerCase().startsWith('geert meme report')) genMemeReport(message.channel);
});

function genMemeReport(channel) {
channel.fetchMessages().then(m => {
    var attCount = 0;
    m.array().forEach(m => {
        if(message.attachments.size > 0){
            console.log(message.attachments.array()[0].url);
    }

    })
    if(attCount === 0) return; //No attachments were found in this channel
});
}
function sendMessage(channel, m){
    


channel.send(attCount + ' images found in this channel');
}