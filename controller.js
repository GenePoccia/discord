//message comes in here
const TEXT_COMMAND = '!'
const MUSIC_COMMAND = '='

let getCommand = (msg) => {
    if (message.substring(0,1) === TEXT_COMMAND)  {
        //handle text
    }
    else if(message.substring(0,1) === MUSIC_COMMAND) {
        //handle music
    }
}

module.exports = {
    getCommand
}