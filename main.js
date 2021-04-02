const discord = require('discord.js')

const express = require('express')

const client = new discord.Client();

const mcdbackup = require("./mcdbackup");

let web = require("http");



//create web server and listen 5500 port , backup system 1st attemp , If this doesn't work we will use the other ready

web.createServer(function(req,res){
  setInterval(() => mcdbackup(), 1000 * 60 * 60 * 12); 
  res.write('online')
  res.end

}).listen(5500);

//2st attemp ready
client.on('ready', () => {
  setInterval(() => backup(), 1000 * 60 * 60 * 12); 
});


//console messages
{
console.log('If you ask if it is not backed up, it will take a backup every 12 hours. 😄')
console.log('%cYou can install a bot to try the backup system. 😉', 'background: black; color: red');
console.log('hey dude why are you waiting will get backup after 12 hours 😊')
}



