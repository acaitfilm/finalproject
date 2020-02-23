import React, {useEffect} from 'react';
import SignUp from './signup';
import LogIn from './login';
import Main from './main';
import User from './users';
import Seats from './selectSeats';
import Admin from './admin';
import CheckoutCompleted from './checkoutCompleted';
import FilmPage from './filmPage';
import NotFound from './notFound';
import FilmSearch from './filmSearch';
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App(){
  useEffect(() => {
    if(!localStorage.getItem('lang')){
      localStorage.setItem('lang','eng');
    }
  }, [])
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
          <Route path = "/checkoutcompleted" component = {CheckoutCompleted} />
          <Route path = "/filmpage" component = {FilmPage} />
          <Route path = '/filmsearch' component = {FilmSearch}/>
          <Route component={NotFound}/>
        </Switch>
    </Router>
    </>
  );
}

export default App;
