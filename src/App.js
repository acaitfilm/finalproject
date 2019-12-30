import React, {useState} from 'react';
import {styles} from './css.js';
import Button from '@material-ui/core/Button';

function App() {
  const [colors] = useState(['red', 'black', 'yellow', 'blue', 'orange', 'aqua', 'brown', 'green', 'pink']);
  const [speed, speedChanger] = useState(1200);
  const [state, stateUpdater] = useState(true);
  const classes = styles();
  let backgroundChanger;

  function changeBackgroundColor(){
    document.body.style = 'background: ' + colors[Math.floor(Math.random() * colors.length)] + ";";
  }
  function stateChange(){
    stateUpdater(!state);
    stateCheck();
  }

  function increaseSpeed(){
    if(speed > 200){
      speedChanger(speed - 100);
    }
  }
  function discreaseSpeed(){
    if(speed < 2000){
      speedChanger(speed + 100);
    }
  }
  function stateCheck(){
    console.log(speed);
    if(state){
      backgroundChanger = setInterval(changeBackgroundColor, speed);
    }else{
      clearInterval(backgroundChanger);
      document.body.style = 'background: white;';
    }
  }
  return (
    <>
    <div className = {classes.speedDiv}>
      Changes in every {speed / 1000} seconds
    </div>
    <div
      className = {classes.divMargins}
    >
       <Button 
          style = {{fontSize: '20px', fontFamily: 'sans-serif', fontWeight: 'bold'}}
          className = {classes.root}
          variant="contained" 
          color="primary"
          onClick = {stateChange}
      >
        {
          state ? "Start" : "Stop"
        }
      </Button>
    </div>
    <div
      className = {classes.speedDivMargins}
    >
       <Button 
          style = {{fontSize: '20px', fontFamily: 'sans-serif', fontWeight: 'bold'}}
          className = {classes.root}
          variant="contained" 
          color="primary"
          onClick = {increaseSpeed}
      >
        Faster
      </Button>
       <Button 
          style = {{fontSize: '20px', fontFamily: 'sans-serif', fontWeight: 'bold', marginLeft: '10%'}}
          className = {classes.root}
          variant="contained" 
          color="primary"
          onClick = {discreaseSpeed}
      >
        Slower
      </Button>
    </div>
    </>
  );
}

export default App;
