import axios from 'axios'
import { TOKEN } from './constants'

const customAxios = axios.create({
  baseURL: process.env.BACKEND_URL || "http://localhost:3001",
  headers: {
    'Authorization': localStorage.getItem(TOKEN)
  }
})

export default customAxios