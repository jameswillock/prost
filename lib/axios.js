const axios = require("axios");

const instance = axios.create({
  baseURL: "https://ergast.com/api/f1/current/",
});

module.exports = instance;
