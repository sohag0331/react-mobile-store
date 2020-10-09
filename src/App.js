import React, { Component} from 'react';
import { Switch,Route, Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Carts from './components/Cart';
import Default from './components/Default'
import Model from './components/Model'


class App extends Component {
  render(){
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/carts" component={Carts} />
        <Route component={Default} />
      </Switch>
      <Model />
    </React.Fragment>
  );
  }
}

export default App;
