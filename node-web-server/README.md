# About

It is node web server written using [Express](https://www.npmjs.com/package/express).

- Web Applications
  <p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
- APIs
  With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.
- Performance
  <p>Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.</p>
- Middleware
  <p>Express is a lightweight and flexible routing framework with minimal core features meant to be augmented through the use of Express middleware modules.</p>

# Many more we can do with Express

- Routing,
- Debugging,
- Error handling, and
- API reference

# Express generator

Use the application generator tool, express-generator, to quickly create an application skeleton.
For the below command, ensure you have nodejs 8.2.0+
`$npx express-generator`

# Fix localhost access denied error 403 in chrome

How to Access HTTPS:// on Localhost in Google Chrome
Launch Google Chrome.
Enter chrome://flags/#allow-insecure-localhost in the address bar.
This action will direct you to a configuration page within Chrome.

# Kill port 3000

find the application listening on port 3000
`netstat -vanp tcp | grep 3000`
on macbook
`lsof -i tcp:3000`
then use PID to kill
`kill -9 <PID>`

# PORT 5000 or 7000 access denied in Macbook

Don't use port 5000 or 7000 in Mac devekopment setup. It is used by AirPlay.

# Express middleware for static site

create a folder called public at root level of the project and use the below middleware syntax to bind the folder for static pages - like html, images, css, javascript
`app.use(express.static(__dirname+'/public'))`

# Express Template Engine

Template engine for dynamic web pages.
Template engines are - hbs, pug, EJS etc
`app.set('view engine', hbs)`
Create a folder called views in root folder. It is used as default template engine folder.
The template file should have extension as .hbs

# Working with partials in hbs

the piece of code that is repeated in different pages are kept inside a folder called partials created under views
and use `hbs.registerPartials(__dirname+'/views/partials')` in server.js file.
Where partial needs to be used, use the syntax {{> partialname}}
Note: parial has also extension as .hbs. By default nodemon does not detect changes in .hbs file, so we need to pass -e hbs,js, like nodemon server.js -e hbs,js and then restart the nodemon
in package.json, write a script called "dev": "nodemon server.js -e js,hbs" and run from command line as
`npm run dev`

# Working with helpers in hbs

To follow the principle of DRY, we can use the `hbs.registerHelper(<methodName>, ()=>{ return "processed logic"});`
Below is an example for getting the current year. This helper can be used across any pages of .hbs file.
hbs.registerHelper("getCurrentYear", () => {
return new Date().getFullYear();
});
