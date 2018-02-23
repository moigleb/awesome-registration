import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { authenticated } from "./actions/authActions";
import AppRouter from './routes/AppRouter';
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

localStorage.getItem('token') && store.dispatch(authenticated());

const jsx = (
  <Provider store={ store }>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
