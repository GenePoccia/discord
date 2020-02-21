var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

var messages = require('./messages.js')

const TEXT_COMMAND = '!'
const MUSIC_COMMAND = '='

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
 });

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == TEXT_COMMAND) {
        let botResponse = messages.handleText(message, bot)

        bot.sendMessage({
            to: channelID,
            message: botResponse
        })
     }
     else if (message.substring(0, 1) == MUSIC_COMMAND) {
         let botResponse = messages.handleMedia(message, channelID)

         bot.sendMessage({
             to: channelID,
             message: botResponse
         })
     }
});

