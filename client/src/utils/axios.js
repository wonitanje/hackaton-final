import axios from 'axios'

axios.defaults.withCredentials = true
// axios.defaults.baseURL = 'http://localhost:8000/'
axios.defaults.baseURL = 'https://rustt.a1.srv.anodev.ru/'

export default axios