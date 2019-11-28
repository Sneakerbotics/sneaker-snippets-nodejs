# Sneaker Snippets
Barebones Javascript snippets for people interesting in seeing the base code behind common sneaker-development practices. A very basic understanding of NodeJS/Javascript/Programming is required to understand some terminology I may be using. More descriptive information will be added in due time.

### Contents

Contents are placed in order from most beginning friendly to the most advanced techniques.

1) [My First Request](/snippets/requests) - A basic HTTP request to extract the page title from a website


### Terminology

A lot of readers may not be familiar with some of the terminology. Here is a guide for anything that may confuse you.

1) [Status/Response Codes](#status-codes)
2) [Request Methods](#request-methods)
3) [Headers](#headers)
3) [Content Types](#content-types)


#### Status Codes

Status codes are numbers returned by a website to describe the type of action or data you are going to see. Common status codes you will deal with are

* 200 - The response has been successful
* 301/302 - The response is redirecting you to another webpage.
* 404 - This page cannot be found
* 407 - Tunnelling socket error, often shown when your program cannot connect to a proxy.
* 500+ - Server errors

Not receiving a status code is usually because something more internal has happened. If you try making a HTTP request without being connected to the internet you will see an example of this.


#### Request Methods

Request methods define the way you plan to send information to a website. There are many different methods but the most common two you will encouter are:

* GET - A `GET` request can only send information to a website via query parameters. Often used to get information rather than send it (hence the name)
* POST - A `POST` request is used to send information to a webserver, this information can consist of many different formats. Please refer to [Content Types](#content-types) to read information about them.


#### Headers

Headers are snippets of key:value information sent to the browser to determine various types of information, most commonly which browser a user is using. The most well known anti-antibot technique is setting a user agent header for a version of a real browser such as: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36`. Matching all the headers with a browser also increases the anonymity of your request, the user-agent header isn't the only way browsers can determine which browser you're using.

The most common types of request headers you will see used are:
1) User-Agent - A string consistenting of the browser/operating system and version.
2) Accept-Language - The server can use this to automatically determine your language.
3) Accept-Encoding - Used to define what type of encoding a server is allowed to send to you. It usually used to make the page filesize smaller, potentially useful when using residential proxies with a limited amount of data. Most commonly `gzip`, `deflate` and `br`
4) Host - The host domain name. This can be used in some good security bypassing techniques.
5) Cache-Control - This is used in determing the cache of the webpage. Usually we don't want to see cached bypasses because they show out-of-date information.
6) Pragma - The older version of cache-control still used by some old website. Just set this to the same value as cache-control if you are using it.
7) Referer - Usually the previous page URL.
8) Cookie - Information stored on your browser being passed to the request.
9) X-CSRF-token/X-CSRF - Used in protecting the request from being forged by other users through link misdirection. These are manually added headers because are prefixed with 'X-' and usually not sent by the browser, but by the server.
10) `X-Requested-With: XMLHttpRequest` - Usually used when making an AJAX request by the browser.




#### Content Types

Content types determine the formatting of your data before sending it to a webserver. The three most common types of content types are:

1) JSON - `application/json` - Usually used inside asynchronous requests. Can contain multiple dimensions of information
2) Form encoded `application/x-www-form-urlencoded` - Made by the browser to send key:value information
3) Multipart `multipart/form-data` - Rarely seen, usually used for file transfer (Uploading a video etc)