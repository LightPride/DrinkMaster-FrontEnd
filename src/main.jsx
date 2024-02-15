import React from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import { store } from './redux/store';
import './index.css';
import './fonts/manrope-regular.ttf';
import './fonts/manrope-medium.ttf';
import './fonts/manrope-semibold.ttf';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/DrinkMaster-FrontEnd">
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);
