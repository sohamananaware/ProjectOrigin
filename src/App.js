import './App.css';
import React from 'react'
import Header from './Header';
import Home from './Home';
import Info from './Info';
import Checkout from './Checkout';
import Login from './Login'
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
        <Info/>
        <Header/>
        <Navbar/>

        <Switch>
          <Route path='/login'>
                <Login/>
          </Route>
          <Route path='/checkout'>
                <Checkout/>
          </Route>
          <Route path='/'>
              <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;