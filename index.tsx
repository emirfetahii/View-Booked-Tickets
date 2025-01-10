import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';  // Correct import for default export

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Provider store={store}>  // Wrap the app in the Provider
    <App />
  </Provider>
);
