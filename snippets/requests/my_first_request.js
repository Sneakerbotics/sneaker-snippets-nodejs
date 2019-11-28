const request = require('request-promise')
const cheerio = require('cheerio')

/**
 * Welcome to my first request. This request demonstrates a simple HTTP request to a website to extract the page title.
 */


async function check() {

    /**
     * Here are the options we're setting for our HTTP request.
     * The options you set are really important and could be the difference between receiving a 200 (successful) or a 403 (banned) status code.
     * I won't go into detail on all the parameters, you can view more on their documentation: https://github.com/request/request-promise
     */

    const url = `https://notify.express`

    const options = {
        url: url, // The page to access
        method: 'GET', // The method of accessing the page, most commonly GET, we use POST for submitting data, rarely you may see other methods in use.
        headers: {
            // Defining a user agent is one of the ways we avoid being detected as a bot. Here we're pretending to be a version of Google Chrome
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
        }
    }

    request(options).then(response => {
        const $     = cheerio.load(response)
        const title = $("title").text()
        console.log(`Success! We've received information from this webpage.`)
        console.log(`The webpage title is: "${title}"`)
        
        /**
         * The title should print "Express Notify | Cook Group".
         * Congratulations! This is one example of how we scrape information with requests from a website.
         * We usually don't need to extract the title of a webpage, but sometimes it's great for checking what page we're on if it isn't returning a common status code.
         */

    }).catch(error => {
        console.log(`Error! We received a bad resposne code or what could be a more serious error (No internet, bad proxy etc)`)
        console.log(`Error message: ${error.message}`)
        // If you want to view more information such as an error trace log known as a "stack trace" uncomment the line below
        // console.log(error)
    })
}


check()