var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var messages = require('./messages.js')
var textHandler = require('./text_responses/textController.js')
const TEXT_COMMAND = '!'
const MUSIC_COMMAND = '='

const userTest = require('./messageHandler');
//initialize bot using auth token
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
 });

//bot running confirmation
bot.on('ready', function (evt) {
    console.log('TooDix bot is currently running');
});

//messages
bot.on('message', function (user, userID, channelID, message, evt) {
    let options = {
        user, userID, channelID, message, evt, bot
    };

    userTest.test(options);
     if (message.substring(0, 1) == TEXT_COMMAND) {
        textHandler.send(message, bot, channelID)
     }
     else if (message.substring(0, 1) == MUSIC_COMMAND) {
         let botResponse = messages.handleMedia(message, channelID)

         bot.sendMessage({
             to: channelID,
             message: botResponse
         })
     }
});
