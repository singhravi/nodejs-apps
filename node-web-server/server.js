const express = require("express");
const hbs = require("hbs");
require("dotenv").config();
const http = require("http"); //default port 80
const https = require("https"); //default port 443
const http2 = require("http2");

const PORT = process.env.PORT | 3001;
const HOSTNAME = process.env.HOSTNAME | "localhost";
const today = new Date();
const app = express();

//register hbs for the partials
hbs.registerPartials(__dirname + "/views/partials");
//use middleware to access static pages, set view engine as handlebars, hbs
app.set("view engine", hbs);

//inject maintenance page before the public directory middleware, so bring the site completely inaccessible
//inject maintenace page after the public directory middleware, to make the static site available
// comment below 3 lines code, once the site is updated under maintenance
// app.use((req, res, next) => {
//   res.render("maintenance.hbs");
// });

app.use(express.static(__dirname + "/public"));
//register helper to get current year
hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});
//registe helper to get a string in uppercase
hbs.registerHelper("loudText", (text) => {
  return text.toUpperCase();
});

app.use((req, res, next) => {
  var now = new Date().toString();
  console.log(`${now}: ${req.method} ${req.url}`);
  next();
  console.log("below next call");
});

//register handler using app.get, which takes two arguments - 1. url, 2. function: what to return
app.get("/", (req, res) => {
  //res - information about coming in request
  //res - information to send back the response
  // render - render template using hbs view engine
  res.render("home.hbs", {
    pageTitle: "Home Page",
    welcomeMessage: "Welcome to my website",
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About Page",
  });
});
app.get("/bad", (req, res) => {
  res.send({ errorMessage: "Unable to connect" });
});

app.listen(PORT, HOSTNAME, () => {
  console.log(
    `Express server is running on PORT ${PORT} and hostname ${HOSTNAME} since ${today})`
  );
});
