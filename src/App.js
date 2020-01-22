import React from 'react';
import axios from 'axios';
import './App.css';
import SignUp from './signup.js';
import LogIn from './login.js'
import {
  Redirect,
  withRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App(){
  // async getDataFromBackend(data){
  //   const address = `$http://127.0.0.1/index.php`;
  //   let response = await axios.post(address, data);
  //   console.log(response);
  // }
  function requestToPHP(){
    // this.getDataFromBackend();
    axios.get(`http://127.0.0.1/index.php`)
      .then(res => {
        console.log(res);
        this.setState({data: res.data});
      },
      () => {
        alert('Not working');
      })
      
  }    
  return (
    <>
    <Router>
    {
        localStorage.username ? <Redirect to = "/users" /> : <Redirect to = "/login" />
      }
        <Switch>
          <Route exact path = "/" component = {SignUp} />
          <Route path = "/signup" component = {SignUp} />
          <Route path = "/login" component = {LogIn} />
          
        </Switch>
    </Router>
       {/* <Router>
        <Switch>
          <Route exact path = "/" component = {} />
          <Route path = "/login" component = {} />
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
