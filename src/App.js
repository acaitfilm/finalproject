import React,{useEffect} from 'react';
import SignUp from './signup';
import LogIn from './login';
import Main from './main';
import Seats from './selectSeats';
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App(){
  return (
    <>
    <Router>
        <Switch>
          <Route exact path = "/" component = {Main} />
          <Route path = "/signup" component = {SignUp} />
          <Route path = "/getseats" component = {Seats} />
          <Route path = "/login" component = {LogIn} />
          <Route path = "/main" component = {Main} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
