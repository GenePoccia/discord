var responses = require('./textService.json')
var eightBall = require('./eightBall.json')

let send = (cmd, bot, channelID) => {
    let command = cmd.substring(1).split(' ')[0]
    let botResponse;
    
    if(command === '8ball') botResponse = handleEightBall();
    else botResponse = responses[command]

    bot.sendMessage({
        to: channelID,
        message: botResponse
    })

}

const handleEightBall = () => {
    let randomResponse = Math.floor((Math.random() * 20) + 0);
    return eightBall[randomResponse];
}

module.exports = {
    send
}