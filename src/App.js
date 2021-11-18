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
import Login from './Login';
import Payment from './Payment';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './Orders';


const promise = loadStripe("pk_live_51JvPo4SDCqaXJOSgPvHqyRj1QSLVPymM39D0JlxJAwhXyzW8TKCT1X5ZfkLtGhU1Q4cgqcu1tWjUibUXjOVXfCkU00hAYI0ePb");
function App() {
  const [{} , dispatch] = useStateValue();

  useEffect(() => {


    auth.onAuthStateChanged(authUser =>{
        console.log(authUser);

      if(authUser){
        
        dispatch({
          type: 'SET_USER',
          user : authUser
        })

      }else{
         
         dispatch({
           type: 'SET_USER',
           user: null
         })

      }

    })
  }, [])
  return (
    //bem
    <Router>

      <div className="app">
        <Switch>
        <Route path='/orders'>
            <Info/>
            <Header/>
            <Navbar/>
            <Orders/>
          </Route>

          <Route path='/login'>
            <Login/>
          </Route>

          <Route path='/checkout'>
            <Info/>
            <Header/>
            <Navbar/>
            <Checkout/>
          </Route>

          <Route path='/payment'>
            <Info/>
            <Header/>
            <Navbar/>
            <Elements stripe={promise}>
             <Payment />
           </Elements>
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