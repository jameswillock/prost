import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://api.jolpi.ca/ergast/f1/',
  proxy: false,
})

export default instance
