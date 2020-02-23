var responses = require('./textService.json')

let send = (cmd, bot, channelID) => {
    let message = cmd.substring(1)
    let botResponse = responses[message]

    bot.sendMessage({
        to: channelID,
        message: botResponse
    })
}

module.exports = {
    send
}