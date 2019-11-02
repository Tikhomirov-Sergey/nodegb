const request = require('request');
const cheerio = require('cheerio');

request('https://ya-to.ru/multi-day-tours/world-tour/', function (error, response, html) {

    if (!error && response.statusCode == 200) {

        const $ = cheerio.load(html);
        const descr = $('.sdescr span');

        descr.each((index, item) => console.log($(item).text()))
    } 
});