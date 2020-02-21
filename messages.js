
let textResponse = require('./responses/textResponse')
let mediaResponse = require('./responses/mediaResponse')

let handleText = (msg, bot) => {
    var userMessage = msg.substring(1).split(' ');
    var cmd = userMessage[0];

    return textResponse.send(cmd, bot)
}

let handleMedia = msg => {
    var userMessage = msg.substring(1).split(' ');

    var cmd = userMessage[0]
    var arg = userMessage.splice(1)

    return mediaResponse.test(cmd, arg)
}

module.exports = {
    handleText,
    handleMedia
}