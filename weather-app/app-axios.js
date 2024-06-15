const yargs = require("yargs");
const axios = require("axios");
require("dotenv").config(); //ensure to load the .env file

const API_KEY = process.env.VC_API_KEY;
//store the parsed input from terminal/cli
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather information",
      string: true,
    },
  })
  .help()
  .alias("help", "h")
  .alias("version", "v").argv;
//TODO - default location, in case user does not pass the address from command line
const address = argv.address;

let WEATHER_API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${address}?key=${API_KEY}`;
axios
  .get(WEATHER_API_URL)
  .then((response) => {
    if (response.data.statusCode === 404) {
      throw new Error("Unable to find that address."); //immediately stops and exit
    }
    let temperature = response.data.currentConditions.temp;
    let feelsLikeTemperature = response.data.currentConditions.feelslike;
    let readingTime = response.data.currentConditions.datetime;

    console.log(`
        Temperature: ${temperature},    
        FeelsLike: ${feelsLikeTemperature},
        Time: ${readingTime}`);
  })
  .catch((error) => {
    //use error.code to check the error types using if condition. error.message is the error message
    console.log(error);
  });
