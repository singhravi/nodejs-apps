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
      default: "Gurugram, HR, India",
      describe: "Address to fetch weather information",
      string: true,
    },
  })
  .help()
  .alias("help", "h")
  .alias("version", "v").argv;

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
    let humidity = response.data.currentConditions.humidity;
    let precipitation = response.data.currentConditions.precip;
    let precipitationProbability = response.data.currentConditions.precipprob;
    let snow = response.data.currentConditions.snow;
    let snowdepth = response.data.currentConditions.snowdepth;
    let windspeed = response.data.currentConditions.windspeed;
    let visibility = response.data.currentConditions.visibility;
    let sunrise = response.data.currentConditions.sunrise;
    let sunset = response.data.currentConditions.sunrise;

    console.log(`
        Current Condition today at: ${readingTime} 
        Temperature: ${temperature},    
        FeelsLike: ${feelsLikeTemperature},
        Humidity: ${humidity},
        Precipitation: ${precipitation},
        Precipitation Probability: ${precipitationProbability}
        Snow: ${snow},
        Snow Depth: ${snowdepth},
        Wind Speed: ${windspeed},
        Visibility: ${visibility},
        Sun Rise: ${sunrise},
        Sun Set: ${sunset}`);
  })
  .catch((error) => {
    //use error.code to check the error types using if condition. error.message is the error message
    console.log(error);
  });
