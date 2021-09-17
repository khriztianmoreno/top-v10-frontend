import axios from 'axios'
import { TOKEN } from './constants'

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:3001",
  headers: {
    'Authorization': localStorage.getItem(TOKEN)
  }
})

export default customAxios