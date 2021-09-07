const axios = require("axios");
exports.callApiGet = (url, path) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => resolve(response))
      .catch((error) => {
        console.log(error)
        reject(error);
      });
  });
};

exports.callApiPost = (url, path, body) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url)
      .then((response) => resolve(response))
      .catch((error) => {
        console.log(error)
        reject(error);
      });
  });
};