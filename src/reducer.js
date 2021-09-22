import {
  LOGIN,
  LOGOUT,
  LOAD_TASKS,
  ERROR,
  LOADING,
  AUTHENTICATED,
  NOT_AUTHENTICATED,
} from './constants';

const initialState = {
  auth: {
    status: LOADING,
    user: null,
  },
  tasks: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  if (action.type === LOGIN) {
    return {
      ...state,
      auth: {
        status: AUTHENTICATED,
        user: action.payload,
      },
    };
  }
  if (action.type === LOGOUT) {
    return {
      ...state,
      auth: {
        status: NOT_AUTHENTICATED,
        user: null,
      },
    };
  }
  if (action.type === ERROR) {
    const error = action.payload;
    let msg = 'Encontramos un error desconocido, intena nuevamente o comu ...';
    if (error.name === 'NetworkError') {
      msg = 'Encontra ...';
    } else if (error.response) {
      if (error.response.status === 401) {
        msg = error.response.data.message;
      }
    }
    return {
      ...state,
      error: msg,
    };
  }
  if (action.type === LOAD_TASKS) {
    return {
      ...state,
      tasks: action.payload,
    };
  }

  return state;
};

export default reducer;
