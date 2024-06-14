echo "# weather-based-planning-" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/singhravi/weather-based-planning-.git
git push -u origin main

# Download Nodejs LTS and install

[Check for LTS Life](https:/​/​github.​com/​nodejs/​LTS)
[Nodejs Installer](https:/​/​nodejs.​org/​en/​)
Select V8 Engine for Chrome.

# Verify installation

From CLI run the following

- `node -v`
- `npm -v`
  NPM is node package manager, installed along with nodejs.

# What is Nodejs

<b>Node's a JavaScript runtime that uses the V8 engine.</b> When they ask you what the V8 engine is, you can say the V8 engine is an open source JavaScript engine written in C++ that takes JavaScript code and compiles it to machine code. It's used inside Node.js and also in the Chrome browser.

JavaScript running as standalone outside the browser. Using JavaScript, now we can manipulate filesystem, create and remove folders, create query databases, even write web server using Node (JavaScript). It runs on V8 JS Runtime engine. It takes JS code and compile it into machine code to run much faster. V8 is written in C++. To extend Node with new features, write code in C++.

Here we are going to use Nodejs, so we will only use JavaScript to write the code.

# Difference Objects in Browser and Node playing the same role

- Window is container for browser, the equivakent in Node is global
- document is container for DOM in browser, the equivalent is process in Node

From command line, type
`$node '

`> global`

`> process`

`> process.exit(0) to exit to out of Node v8 JS Runtime`

<hr/>

# Why Nodejs

Nodejs is event driven and non-blocking I/O model. Note: I/O takes time to process result, while non-blocking makes it efficient and light-weight to adopt and use.

The I/O intensive works are fired as event and kept onto event loop attached with event listener in the form of callback function, which returns the result when ready as the event cycle reaches there to check.

# NPM

[NPM](https:/​/​www.​npmjs.​com/)​
Note: All NPM modules are built based on the non-blocking fundamental principle of V8 Chrome Engine.

# Code Editor

I prefer to use VS Code.

# What is module in Nodejs

Modules are units of functionality. use require function to load module in memory for using its features.

# How to tell application that we want to use npm

From the root folder of the application run the following command and enter the required field or only enter to keep the default
`npm init`
or run as below to keep all as default
`npm init -y`
The result of the npm init command is a file, called package.json

# Automatic restart application in case of changes saved

- Use [nodemon](https://www.npmjs.com/package/nodemon) module in development environment for automatic start of the application. It is responsible for watching any changes and then restarting the application.

- Use [PM2](https://www.npmjs.com/package/pm2) in production to start and run nodejs application. It also works as load balancer.

# Important Libraries

- inbuilt process.argv to getting the name of the arguments passed
- yargs: to get the key-value pair of the arguments
- lodash: multiple utlities for strings and arrays
- pm2: production runner for nodejs app
- nodemon: development runner for nodejs app
- JSON.stringify(jsonObject) converts JSON object into JSON string
- JSON.parse(jsonString) converts JSON string into JSON object

# Important array functions

- map: Calls a defined callback function on each element of an array, and returns an array that contains the results.
- filter: Returns the elements of an array that meet the condition specified in a callback function.
- forEach: Performs the specified action for each element in an array.
- push: add element at the end of the array
- unshift: add element at the start of the array
- pop: remove element from end of array, returns undefined if no element found
- shift: remove element from start of the array, returns undefined if no element found
- length: provides the number of elements in the array
- join: Adds all the elements of an array into a string, separated by the specified separator string.
- reverse: Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
- slice: Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
- sort: Sorts an array in place. This method mutates the array and returns a reference to the same array. Works well on strings, but for numberic need to write a function
  `const points = [40, 100, 1, 5, 25, 10];`
  `// Sort the numbers in ascending order`
  `points.sort(function(a, b){return a-b});`

- values: Returns an iterable of values in the array

# Debugging of Nodejs applications

- From the terminal run nodejs app using node inspect app.js
- And use the keyword debugger where you want to debug
- And after run, use the c key to go to debugger location
- And then use repl to go to nodejs prompt and check there what you want to check and validate.

3rd party tool Chrome DevTools is one of the important visual tool for debugging nodejs application.

# Note:

()=> {} arrow function cannot use this as expected, better use ES5 function
