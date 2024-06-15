const request = require("request");
const yargs = require("yargs");
const weather = require("./weather/weather");

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

weather.getWeather(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});
