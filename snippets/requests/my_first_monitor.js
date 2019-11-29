const request = require('request-promise')
const cheerio = require('cheerio')

/**
 * If you've just finished reading my_first_request.js welcome to part two, my first monitor.
 * Here we will try to detect a change in a website and send an alert once we've found a change.
 */


async function check() {
    const options = {
        url: 'https://notify.express',
        method: 'GET'
    }

    /**
     * Because this function is asynchronous, we need to to turn it back to the function that is waiting for it.
     * We're returning the title of the webpage, just like we received in the last one.
     */

    return request(options).then(response => {
        const $     = cheerio.load(response)
        const title = $("title").text()
        return title
    }).catch(error => {
        console.log(`Error! We received a bad response code or what could be a more serious error (No internet, bad proxy etc)`)
        console.log(`Error message: ${error.message}`)
        return
    })
}

function findChange() {
    let last_title = false

    setInterval(async function() {
        let latest_title = await check()

        if (latest_title && latest_title != last_title) {
            if (!last_title) {
                console.log("This is the first iteration. Finding what the title is.")
            } else {
                // We could do something cool in here like send a discord webhook or move onto the next stage of our bot
                console.log(`The title of the webpage has changed, it's now: "${latest_title}"`)
            }
        } else if (last_title == latest_title) {
            console.log(`The title of the webpage is still the same. No change has been detected. it's still: "${latest_title}"`)
        } else {
            return console.log("There was probably a server error! Not updating the title.")
        }

        // Redefining the variable as the most up-to-date title everytime except where we don't want to
        last_title = latest_title
    }, 1500)
}


findChange()