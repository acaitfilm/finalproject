import React from 'react';
import SignUp from './signup';
import LogIn from './login';
import Main from './main';
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
<<<<<<< HEAD
    {
        localStorage.username ? <Redirect to = "/users" /> : <Redirect to = "/signup" />
      }
=======
        <Redirect to = "/main" />
>>>>>>> ed0a2b537ce33bcdb80dc0186fe8f657cddbde6b
        <Switch>
          <Route exact path = "/" component = {SignUp} />
          <Route path = "/signup" component = {SignUp} />
          <Route path = "/login" component = {LogIn} />
          <Route path = "/main" component = {Main} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
