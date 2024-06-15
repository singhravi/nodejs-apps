let getUser = (id, callback) => {
  let user = {
    id: id,
    name: "Ravi",
    age: 45,
    email: "rr@gmail.com",
  };
  //delay to get the data
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(31, (userObject) => {
  console.log(userObject);
});
