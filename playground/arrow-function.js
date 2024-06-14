let user = {
  name: "Ravi",
  sayHi: () => {
    console.log(`Hi. I am ${this.name}`);
  },
  sayHiAlt() {
    console.log(arguments);
    console.log(`Hi. I am ${this.name}`);
  },
};
console.log("Call sayHi of user");
user.sayHi();
console.log("Call sayHiAlt of user");
user.sayHiAlt(1, 2, 3, 4);
