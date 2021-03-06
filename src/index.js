import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// IMPORT SERVICE PROVIDER FROM EASY PEASY
import { StoreProvider } from 'easy-peasy';


// IMPORT STYLE
import 'bootstrap/dist/css/bootstrap.css'
import './assets/scss/style.scss'


// IMPORT COMPONENT
import App from './app'
import store from './store';

// ReactDOM.render(
//   <React.StrictMode>
//     <StoreProvider store={store}>
//       <App />
//     </StoreProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

if (process.env.NODE_ENV !== 'development') {
  ReactDOM.render(
    <React.StrictMode>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </React.StrictMode>
    ,
    document.getElementById('root')
  );
} else {
  ReactDOM.render(
    <StoreProvider store={store}>
      <App />
    </StoreProvider>,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
