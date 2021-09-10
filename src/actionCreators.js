import axios from './axios'
import { LOAD_TASKS, LOGIN, ERROR } from './actions'
import history from './history'

// Action Creators - podemos retornar una función con redux thunk
export function login(email, password) {
  return async function(dispatch) {
    try {
      const response = await axios.post('/login', { email, password }) 
      const token = response.data.token
      const user = response.data.user
      localStorage.setItem("token", token)
      dispatch({ type: LOGIN, payload: user })
      history.push('/')
    } catch (err) {
      dispatch({ type: ERROR, payload: err })
    }
  }
}

export function loadTasks() {
  return async function(dispatch) {
    const response = await axios.get('/tasks')
    dispatch({ type: LOAD_TASKS, payload: response.data})
  }
}