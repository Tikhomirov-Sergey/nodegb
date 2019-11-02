const request = require('request');
const cheerio = require('cheerio');

const domain = 'https://ya-to.ru';

const getTours = () => {

    const promise =  new Promise((resolve, reject) => {

        request(`${domain}/multi-day-tours/world-tour/`, function (error, response, html) {

            if(error) return reject(error);

            const $ = cheerio.load(html);
            const tourDiv = $('.sdescr');

            let tours = [];

            tourDiv.each((index, item) => {

                const $tourDiv = $(item);
                const title = $tourDiv.find('span').text();

                const hrefArrt = $tourDiv.attr('href');
                const href = `${domain}${hrefArrt}`;

                if(hrefArrt)
                    tours.push({title, href})
                    
            })

            resolve(tours);
        });
        
    })

    return promise;
} 

module.exports = getTours;