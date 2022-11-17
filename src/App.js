import React from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
//import "bootstrap/dist/css/bootswatch.min.css";
import Modal from './components/Modal';
import Home from './components/Home';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/productList" component={ProductList} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
