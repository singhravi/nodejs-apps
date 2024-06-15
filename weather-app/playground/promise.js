//resolve-res, reject-rej,
//we can pass whatever we can as two parameters of promise, one is for success, other is for failure

let somePromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Hey, It worked");
    res("Hey, it worked again");
    rej("Unable to fulfill the promise");
  }, 2500);
});
somePromise.then(
  (message) => {
    console.log("Success: ", message);
  },
  (errorMessage) => {
    console.log("Error: ", errorMessage);
  }
);

let asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("Arguments must be numbers");
      }
    }, 1500);
  });
};

asyncAdd(3, "abc").then(
  (res) => {
    console.log("Result:", res);
  },
  (errorMessage) => {
    console.log(errorMessage);
  }
);

asyncAdd(3, 5).then(
  (res) => {
    console.log("Result:", res);
  },
  (errorMessage) => {
    console.log(errorMessage);
  }
);
//Promise Chaining
asyncAdd(5, 8)
  .then(
    (res) => {
      console.log("Result:", res);
      return asyncAdd(res, 35);
    },
    (errorMessage) => {
      console.log("error1", errorMessage);
    }
  )
  .then(
    (res) => {
      console.log("Should new number as 48", res);
    },
    (errorMessage) => {
      console.log("error2", errorMessage);
    }
  );
//error chaining condition, the execution is not as expected,
//to fix this error, we wise catch at end to handle the error in chain
asyncAdd(5, "8")
  .then(
    (res) => {
      console.log("Result:", res);
      return asyncAdd(res, 35);
    },
    (errorMessage) => {
      console.log("error1", errorMessage);
    }
  )
  .then(
    (res) => {
      console.log("Should new number as 48", res);
    },
    (errorMessage) => {
      console.log("error2", errorMessage);
    }
  );
// use catch to handle error in chain
asyncAdd(5, "8")
  .then((res) => {
    console.log("Result:", res);
    return asyncAdd(res, 35);
  })
  .then((res) => {
    console.log("Should new number as 48", res);
  })
  .catch((errorMessage) => {
    console.log("chain error caught- ", errorMessage);
  });
