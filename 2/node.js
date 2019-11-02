const readline = require('readline');
var fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout 
    });

const randomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const toLog = message => {

    fs.appendFile('./log.txt', message, [], error => {
        if(error)
            console.log(error)
    })
}

const message = message => {
    console.log(message);
    toLog(message);
}

const gameStart = () => {

    console.log('Орел или решка?')
    console.log('Орел - 0, Решка - 1');

    rl.on('line', text => {

        const random = randomNumber(2);

        if(text == random) {
            message(random)
            message('Победа');
        } else {
            message('Проиграл')
        }
    })

}

gameStart()

