import React from 'react';
import SignUp from './signup.js';
import LogIn from './login.js'
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
    {
    //    localStorage.username ? <Redirect to = "/users" /> : <Redirect to = "/signup" />
      }
        <Switch>
          <Route exact path = "/" component = {SignUp} />
          <Route path = "/signup" component = {SignUp} />
          <Route path = "/login" component = {LogIn} />
          
        </Switch>
    </Router>
    </>
  );
}

export default App;
