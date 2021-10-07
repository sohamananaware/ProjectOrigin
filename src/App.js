import './App.css';
import React from 'react'
import Header from './Header';
import Home from './Home';
import Info from './Info';
import Checkout from './Checkout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Navbar';

function App() {
  return (
    //bem
    <Router>

      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <Info/>
            <Header/>
            <Navbar/>
            <Checkout/>
          </Route>

          <Route path='/'>
            < Info />
            < Header />
            <Navbar/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;