const axios = require("axios");

const instance = axios.create({
  baseURL: "http://api.jolpi.ca/ergast/f1/",
});

module.exports = instance;
