const usercreated = require("../CRUD/create");

const myLogger = function (req, res, next) {
  console.log("LOGGED");

  console.log(name, email, password, "this is everythig");
  if (email) {
    usercreated({ name, email, password, mno: number })
      .then(() => {
        res.send("user created successfully");
      })
      .catch((err) => {
        console.log(err)
        res.status(400).send("invalid data");
      });
  }

  next();
};

module.exports = myLogger;
