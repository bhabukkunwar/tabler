import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
         <Route path="/checkout">
           <h1>
             This is checkout page
           </h1>

         </Route>
      
        <Route path="/login">
         <h1>
         This is a login page
         </h1>

        </Route>
        <Route path="/booking">
         <h1>
         This is a reservation page
         </h1>
         </Route>

         <Route path="/">
         <Header/>
         <Home/>



        </Route>
      </Switch>
     
     
    </div>
    </Router>
  );
}

export default App;
