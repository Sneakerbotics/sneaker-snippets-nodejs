# Sneaker Snippets
Barebones Javascript snippets for people interesting in seeing the base code behind common sneaker-development practices. A very basic understanding of NodeJS/Javascript/Programming is required to understand some terminology I may be using. More descriptive information will be added in due time.

### Contents

Contents are placed in order from most beginning friendly to the most advanced techniques.

1) [My First Request](/snippets/request) - A basic HTTP request to extract the page title from a website


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

The most common types of headers you will see used are:
1) User-Agent
2) Accept-Language
3) Accept-Encoding
4) Host
5) Cache-Control
6) Pragma
7) Referer
8) Cookie



#### Content Types

Content types determine the formatting of your data before sending it to a webserver. The three most common types of content types are:

1) JSON - `application/json` - Usually used inside asynchronous requests. Can contain multiple dimensions of information
2) Form encoded `application/x-www-form-urlencoded` - Made by the browser to send key:value information
3) Multipart `multipart/form-data` - Rarely seen, usually used for file transfer (Uploading a video etc)