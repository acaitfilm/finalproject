import React from 'react';
import SignUp from './signup';
import LogIn from './login';
import Main from './main';
import User from './users';
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
        <Redirect to = "/main" />
        <Switch>
          <Route exact path = "/" component = {SignUp} />
          <Route path = "/signup" component = {SignUp} />
          <Route path = "/login" component = {LogIn} />
          <Route path = "/main" component = {Main} />
          <Route path = "/user" component = {User}/>
         
        </Switch>
    </Router>
    </>
  );
}

export default App;
