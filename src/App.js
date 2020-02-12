import React from 'react';
import SignUp from './signup';
import LogIn from './login';
import Main from './main';
import User from './users';
import Seats from './selectSeats';
import Admin from './admin';
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
          <Route path = "/user" component = {User}/>
          <Route path = "/admin" component = {Admin}/>
         
        </Switch>
    </Router>
    </>
  );
}

export default App;
