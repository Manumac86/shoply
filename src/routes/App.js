import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CartProvider } from '../context/cartContext';

import './Global-Styles.css';

import Cart from '../containers/Cart';
import Home from '../containers/Home';
import Products from '../containers/Products';
import Product from '../containers/Product';
import Loader from '../components/loader/Loader';
import Header from '../components/header/Header';

import navList from '../constants/navigationConstant';
import api from '../constants/api'

const App = () => {
  return (
    <div className='App'> 
      <Router>
        <Header navList={navList} />
        <Route exact path='/'>
          <Home />
        </Route>
        <CartProvider>
          <Route exact path='/products'>
            <Products data={api} />
          </Route>
          <Route exact path='/product/:id'>
            <Product data={api} />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
        </CartProvider>
      </Router>
    </div> 
  );
}

export default App;
