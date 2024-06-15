# About the app

[Use Visual Crossing API for Weather forecast](https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/). It requires an API key, which you can get after sign up.

Using yargs npm package, we will read data from the terminal as input for the location.

# How to use the application

I have defined .env file and stored inside all the required environment variables like API KEYs and values

` node app.js --address 'your address'`

# Encoding and Decoding

Nodejs provides methods for encoding and decoding

- encodeURIComponent(<string>)
- decodeURIComponent(<encodedString>)

# Type of Errors to be taken care

- machine error: machine unable to connect
- server error: invalid data

# Forecast Request Example

The following will retrieve the weather forecast for London, United Kingdom for the next 15 days, starting at midnight at the start of the current day (local time of the requested location).

https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=YOUR_API_KEY

# Format for request npm package

`request({url: '', json:true}, (error, response, body) => {
    //an example to show the response
    JSON.stringify(response, undefined, 2);
})`

# JSON Data display in Chrome browser

JSONView plugin

# Promises in async method calls

Promises aim to solve a lot of the problems that come up when we have a lot of asynchronous code or I/O intensive code in our application. They make it a lot easier to manage our asynchronous computations—things such as requesting data from a database. Alternatively, in the case of a weather app, things such as fetching data from a URL.

- <b></i>Promise is used to avoid lots of check with if/else in callback functions.</i></b>
- <b><i>Inside Promise we can either resolve/success or reject/failure</i></b>
- Accidental call of callback twice can be avoided using Promise
- Promise has two states: either <b>pending (awaiting for response) or settled - when fulfilled or rejected</b>

# Promise Chaining

Promise chaining is the idea of having multiple promises run in a sequence. In order to chain our promises, inside our success call we'll return a new promise.

# Axios

It is in-built Promise return, so we need to use only then() for success and catch() for error.
[Axios](https://www.npmjs.com/package/axios) - refer for more detail information.
