import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burgerapp-c9dcf-default-rtdb.firebaseio.com/'
})

export default instance;