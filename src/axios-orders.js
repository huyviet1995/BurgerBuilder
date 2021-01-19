import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://crucial-module-166020.firebaseio.com/'
})

export default instance;