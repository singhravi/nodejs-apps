console.log("Starting app");

setTimeout(() => {
  console.log("inside settimeout callback");
}, 2000);
setTimeout(() => {
  console.log("Second setTimeout");
}, 0);

console.log("Finishing up");
