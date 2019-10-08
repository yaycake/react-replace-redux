import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
// import productReducer from './store/reducers/products';
// import ProductsProvider from './context/products-context';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';


import configureProductsStore from './hooks-store/products-store'

configureProductsStore();

// const store = createStore(rootReducer);

ReactDOM.render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
    ,
  document.getElementById('root')
);
