# Sneaker Snippets
Barebones Javascript snippets for people engaging in seeing the base code behind standard sneaker-development practices. A fundamental understanding of NodeJS/Javascript/Programming is required to understand some terminology and practises I may be using.

### Contents

The code snippets are placed in order from most beginning friendly to the most advanced techniques.

1) [My First Request](/snippets/requests) - A basic HTTP request to extract the page title from a website
2) [My First Monitor](/snippets/requests) - A basic monitor using HTTP request to extract the page title from a website and look for a change.


### Terminology

Many readers may not be familiar with some of the terminology. Here is a guide for anything that may confuse you.

1) [Status/Response Codes](#status-codes)
2) [Request Methods](#request-methods)
3) [Headers](#headers)
4) [Content Types](#content-types)
5) [Cookies](#cookies)


#### Status Codes

Status codes are numbers returned by a website to describe the type of action or data you are going to see. Universal status codes you will deal with are:

* 200 - The response has been successful
* 3XX - The response is redirecting you to another webpage; usually, 3XX response codes have no content in them and just a `location` header of the page you are about to be redirected to.
* 401 - Unauthorized. You are not authorized to access the page.
* 404 - This page cannot be found
* 407 - Tunnelling socket error, often shown when your program cannot connect to a proxy.
* 5XX - Server errors

Not receiving a status code is usually because something more internal has happened. If you try making an HTTP request without being connected to the internet, you will see an example of this. Theoretically, a server could provide a valid response as an invalid status code to try and trick you; this is unlikely as it would also create a challenging development experience.


#### Request Methods

Request methods define the way you plan to send information to a website. There are many different methods, but the most common two you will encounter are:

* GET - A `GET` request can only send information to a website via query parameters. Often used to get information rather than send it (hence the name)
* POST - A `POST` request is used to send information to a web server, this information can consist of many different formats. Please refer to [Content Types](#content-types) to read information about them.


#### Headers

Headers are snippets of key:value information sent to the browser to determine various types of information, most commonly which browser a user is using. The most well known anti-antibot technique is setting a user-agent header for a version of a real browser such as: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36`. Matching all the headers with a browser also increases the anonymity of your request, the user-agent header isn't the only way browsers can determine which browser you're using.

The most common types of request headers you will see used are:
1) User-Agent - A string consisting of the browser/operating system and version.
2) Accept-Language - The server can use this to determine your language automatically.
3) Accept-Encoding - Used to define what type of encoding a server is allowed to send to you. It usually used to make the page file size smaller, potentially useful when using residential proxies with a limited amount of data. Most commonly `gzip`, `deflate` and `br`
4) Host - The host domain name. This parameter can be used in some good security bypassing techniques.
5) Cache-Control - This is used in determining the cache of the webpage. Usually, we don't want to see cached bypasses because they show out-of-date information.
6) Pragma - The older version of cache-control still used by some old websites. Just set this to the same value as cache-control if you are using it.
7) Referer - Usually, the previous page URL. (Purposely spelt wrong)
8) Cookie - Information stored on your browser is passed to the request.
9) X-CSRF-token/X-CSRF - Used in protecting the request from being forged by other users through link misdirection. These headers are manually added because they are prefixed with 'X-' and usually not sent by the browser, but by the server.
10) `X-Requested-With: XMLHttpRequest` - Usually used when making an AJAX request by the browser.
11) Location - The location header is set by 3XX [status codes](#status-codes). Most HTTP libraries provide the functionality not to follow redirects and view the content behind the page; in certain cases, this can be used to bypass security systems.

> Before it was patched. Solebox had a queue bypass that let you access a product behind a queue by turning off redirects. You could then quickly check out this product as they had no fallback security.

```
# Solebox example code (PHP)
if ($userHasNotCompletedQueue) {
 # Redirect the user to the queue URL.
 header("location: " . $backToQueueURL);
 # Because they failed to terminate the script the content is behind it is visible when we turn off redirects
 # If the line below was uncommented it would have stopped users getting access to the product page.
 # die("Unauthorized!");
}

echo $productPage;
```


#### Content Types

Content types determine the formatting of your data before sending it to a web server. The three most common types of content types are:

1) JSON - `application/json` - Usually used inside asynchronous requests. Can contain multiple dimensions of information
2) Form encoded `application/x-www-form-urlencoded` - Made by the browser to send key:value information
3) Multipart `multipart/form-data` - Rarely seen, usually used for file transfer (Uploading a video etc.)


#### Cookies

Cookies are small pieces of key:value information stored by a website. This is usually done for tracking and session management. Cookies are often used in security systems to determine if a user is legitimate or a bot. Cloudflare uses two cookies to determine whether or not to allow access to a website: `__cfduid` and `__cf_bm`.

> Thanks for reaching out to us regarding the __cf_bm cookie. This new cookie is part of Cloudflare's Bot Management service and helps manage incoming traffic that matches criteria associated with bots.

Cookies are essential for state-management when creating a bot or monitor. Cookies sometimes store what products you have in your cart (Usually in a non-visible way so the user cannot edit them manually) and whether you're logged in on a website or not.

Not using or incorrect usage of cookies may result in repeating errors. An example of an error would be adding an item to your cart and then not being able to see it in your basket when you visit the checkout page.

I recommend using the [EditThisCookie](https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg?hl=en) extension to view and edit your cookies in the browser easily; This is an excellent tool for testing cookie issues.