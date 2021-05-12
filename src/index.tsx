import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/app'
import 'firebase/auth'

import { Provider } from 'react-redux';
import  reducer from "./reducers/reducers"
import { createStore } from 'redux';

firebase.initializeApp({
  apiKey: "AIzaSyAyIFNXbgfyXi0BCZ0pDhFOHMAp8jRD6Z8",
  authDomain: "authentication-4f6bc.firebaseapp.com",
  projectId: "authentication-4f6bc",  
  storageBucket: "authentication-4f6bc.appspot.com",
  messagingSenderId: "1050374532831",
  appId: "1:1050374532831:web:122862fb539ff94787836a"
});

export const auth = firebase.auth();

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>    
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
