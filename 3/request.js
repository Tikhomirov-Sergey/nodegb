const request = require('request');
const readline = require('readline');

const key = 'trnsl.1.1.20191004T201915Z.5a170f876ad3dd6e.5b9cdddfec0cc03ddd6bd287d65fcdf68a452158';
const yandexUrl = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&lang=en-ru`;

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout 
    });

const translate = (callback, text) => {

    const url = `${yandexUrl}&text=${text}`

    request(url, function (error, response) {

        if (!error && response.statusCode == 200) {
            callback(null, JSON.parse(response.body).text[0])
        } 
        else {
            callback(error)
        }
    });
}

rl.on('line', text => {

    const translateCallback = (error, translateText) => {
        console.log(error ? error || error.message : translateText);
        rl.resume();
    }

    if(text) {
        rl.pause();
        translate(translateCallback, text);
    }
})    