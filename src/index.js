import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import createStore from './store';

const Root = (
  <React.StrictMode>
    <Provider store={createStore()}>
      <App />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(Root, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
