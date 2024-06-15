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
