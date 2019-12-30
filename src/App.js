import React, {useState} from 'react';
import {styles} from './css.js';
import Button from '@material-ui/core/Button';

let backgroundChanger;

function App() {
  const [colors] = useState(['#EF895D', '#FFDD94', '#86E3CE', '#D0E6A5', '#CCABD8', '#FA897B', '#1AA6B7', '#FF414D', '#F56A79', '#D9ECF2', '#BAC94A', '#E2D36B', '#96D7C6']);
  const [speed, speedChanger] = useState(1200);
  const [state, stateUpdater] = useState(true);
  const classes = styles();

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
    if(state){
      backgroundChanger = setInterval(changeBackgroundColor, speed);
    }else{
      clearInterval(backgroundChanger);
      document.body.style = 'background: white;';
    }
  }
  return (
    <>
      {state ? 
        <>
          <div className = {classes.speedDiv}>
            Changes in every {speed / 1000} second
          </div>
        </> : false
      }
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
      >{
        state ? <> 
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
        </Button> </> : false
      }
      </div>
    </>
  );
}

export default App;
