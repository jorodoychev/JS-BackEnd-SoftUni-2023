const jwt = require("jsonwebtoken");

const sign = (payload, secret, option) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret, option, (err, result) => {
      if (err) {
        return reject(err);
      }

      return resolve(result);
    });
  });
};

const verify = (token, secret) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, result) => {
      if (err) {
        return reject(err);
      }

      return resolve(result);
    });
  });
};

const jwtPromises = { sign, verify };
module.exports = jwtPromises;
