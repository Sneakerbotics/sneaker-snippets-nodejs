const Discord = require('discord.js')

/**
 * Welcome to my first webhook. This is where we will create a Discord embed and send it straight to a server with product information.
 * To start we will create a fake product object which would look like something we extract from a webpage.
 * The IDs are extracted so we can use ATC links later on...
 */

/**
 * If you can consistently extract data in the same format (name, price, thumbnail, sizes etc) you could use one function across all your monitors
 * to send webhooks.
 */

const item = {
    site: 'Shoewebsite',
    name: 'Adidas Yeezy Boost 350',
    price: '£179',
    thumbnail: 'https://assets.adidas.com/images/w_840,h_840,q_auto:sensitive/0cd2a846d9b543e5b09baa55014ebb08_9366/01_standard_1.jpg',
    sizes: [
        {
            name: 'UK 8',
            id: 13333
        },{
            name: 'UK 8.5',
            id: 13334
        },{
            name: 'UK 9',
            id: 13335
        },{
            name: 'UK 9.5',
            id: 13336
        },{
            name: 'UK 10',
            id: 13337
        }
    ]
}


async function sendWebhook(product) {
    
    /**
     * Learn more about embeds, their limits and options here: https://discordjs.guide/popular-topics/embeds.html#embed-preview
     */

    const embed = new Discord.RichEmbed()
        .setAuthor('Sneakerbotics')
        .setTitle(product.name)
        .setDescription(`${product.site} has restocked ${product.name}`)
        .addField('Sizes', product.sizes.map(s => `[${s.name}](https://shoewebsite.com/add/cart/${s.id})`).join('\r\n'), true) // Show sizes as a list inside a hyperlink.
        .addField('Price', product.price, true)
        .setThumbnail(product.thumbnail)
        .setColor('#ff0000')
        .setFooter('NodeJS Snippets by Sneakerbotics', 'https://placehold.it/50x50')

    /**
     * https://discordapp.com/api/webhooks/650671953140555555/lT4e4qNtVi5l6g2jiliAj8lFfUK4a0aLNkMV3xrAH8MKNMxrHU05-ztoBkiMZDAxxxxx
     * ID: 650671953140555555
     * TOKEN: lT4e4qNtVi5l6g2jiliAj8lFfUK4a0aLNkMV3xrAH8MKNMxrHU05-ztoBkiMZDAxxxxx
     */

    const webhook = new Discord.WebhookClient('650671953140555555', 'lT4e4qNtVi5l6g2jiliAj8lFfUK4a0aLNkMV3xrAH8MKNMxrHU05-ztoBkiMZDAxxxxx')
    webhook.send(embed)

}


sendWebhook(item)

