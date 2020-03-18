let cmdTypes = require('./types/cmdTypes.json');

const test = (options) => {
    let msgObject = splitMessage(options);
    if(msgObject.cmdType === cmdTypes.text){
        //handle text response w/ message
            if(msgObject.message){
                //logic
            }

        //handle text response w/o message
            if(!msgObject.message){
                //logic
            }
    }
    else if(msgObject.cmdType === cmdTypes.audio) {
        //handle audio
    }
}


const splitMessage = (options) => {
    let cmdType = options.message.substring(0,1);
    let cmd = options.message.split(' ')[0].substring(1);
    let message = options.message.split(' ').slice(1).join('');

    return {
        cmdType,
        cmd,
        message
    }
}

module.exports = {
    test
}