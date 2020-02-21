const PLAY = 'play'
const SKIP = 'skip'
const STOP = 'stop'


let test = (cmd, arg) => {
    if(cmd === PLAY) handlePlay(arg)
    else if (cmd === SKIP) return 'placeholder'
    else if (cmd === STOP) return 'placeholder'
}

let handlePlay = (arg) => {
    let songTitle = createSongTitle(arg)
    //call youtube with song title
}

let createSongTitle = arg => {
    let title = ''
    for (let i = 0; i < arg.length; i++) {
        title += arg[i] + ' '
    }

    return title;
}

module.exports = { 
    test
}