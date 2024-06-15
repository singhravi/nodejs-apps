//encoding, making request, handling errors

const request = require("request");
require("dotenv").config(); //ensure to load the .env file

const API_KEY = process.env.VC_API_KEY;

let getWeather = (address, callback) => {
  // from command line run the application as: node app.js --address '<your address>'
  request(
    {
      url: `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${address}?key=${API_KEY}`,
      json: true,
    },
    (error, response, body) => {
      if (error) {
        callback("unable to connect to server");
      } else if (response.statusCode === 404) {
        callback("No data found");
      } else if (response.statusCode === 200) {
        //there is no error now but only result, so first argument is undefined
        callback(undefined, {
          Address: body.address,
          Latitude: body.latitude,
          Longitude: body.longitude,
          TimeZone: body.timezone,
          TZOffset: body.tzoffset,
          Description: body.description,
          Temperature: body.currentConditions.temp,
          FeelsLike: body.currentConditions.feelslike,
          Time: body.currentConditions.datetime,
          //   Days: [body.days],
        });
      }
    }
  );
};

module.exports = {
  getWeather,
};
