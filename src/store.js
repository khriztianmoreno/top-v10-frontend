import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { LOGIN, LOAD_TASKS, ERROR } from './actions'

const initialState = {
  user: null,
  tasks: [],
  error: null
}

const reducer = function(state=initialState, action) {
  if (action.type === LOGIN) {
    return { ...state, user: action.payload }
  } else if (action.type === ERROR) {
    const error = action.payload
    let msg = "Encontramos un error desconocido, intena nuevamente o comu ..."
    if (error.name === "NetworkError") {
      msg = "Encontra ..."
    } else if (error.response) {
      if (error.response.status === 401) {
        console.log("Data", error.response.data)
        msg = error.response.data.error
      }
    }
    return { ...state, error: msg }
  }else if (action.type === LOAD_TASKS) {
    return { ...state, tasks: action.payload }
  }
  return state
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))