import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Cart from './components/Cart';

class App extends Component {
  render() {
  return (
    <React.Fragment>
      <NavBar />
      <ProductList />
      <Details />
      <Cart />
      <Default />
    </React.Fragment>
    );
  }
}

export default App;
