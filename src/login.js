import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {styles} from './styles.js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function LogIn(props){
    const [error, setError] = useState({});
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);

    const usernameUpdater = (event)=>{
        setUsername(event.target.value);
    }
    const passwordUpdater = (event)=>{
        setPassword(event.target.value);
    }
    
    const btnClick = ()=>{
        //stugum enq ete ka nshvac anunov username, vercnum enq ira password@
        let passwordIfExists = '', errorCheck = false;
        users.map(arr => {
            if(arr[0][3] === username){
                passwordIfExists = arr[0][8];
            }
            return true;
        });
        if(passwordIfExists === ''){
            error.username = "Doesn't exist.";
            errorCheck = true;
        }else{
            error.username = '';
        }
        if(passwordIfExists && password !== passwordIfExists){
            error.password = "Wrong password.";
            errorCheck = true;
        }else{
            error.password = "";
        }
        setError({...error});
        if(!errorCheck){
            localStorage.setItem('username',username);
            props.history.replace('/users');
        }       
    }
    const handleKeyPress = (event) =>{
        const {keyCode} = event;
        //stex senc em grel ,vor datarki depkum chkatarvi,heto kpoxenq
        if(keyCode === 13 && !!username && !!password){ 
            btnClick();
        }
    } 
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
    
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      });
      //databaseic stanum es userneri list
      useEffect(() => {
        let formData = new FormData();
            formData.append("userGet", 1);
                const url = `http://localhost/index.php`;
                axios.post(url,formData)
                    .then(
                    function(res){
                        let arrOfUsers = [];
                        while(res.data.length){
                            arrOfUsers.push([res.data.splice(0,9)]);
                        }
                        setUsers(arrOfUsers);
                    }
                    )
                    .catch(err => console.log(err));
      },[]);
    document.body.style.backgroundImage='url(https://i.pinimg.com/originals/e1/6e/96/e16e968daac9752ca91e49761e68fce7.jpg)';
    document.body.style.backgroundSize='100%';
    
    const classes = styles();
    return(
        <div className={classes.loginMainDiv}>
            <div className={classes.loginMainText}>
                Log In
            </div>
            <div className={classes.loginFirstDiv}>
                <TextField
                    id="outlined-basic" 
                    label='Username'
                    error = {!!error.username}
                    helperText={error.username}
                    value = {username}
                    variant='outlined'
                    size = 'medium'
                    onChange = {(event) => usernameUpdater(event)}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline
                                }
                        }}
                />
        
            </div>
            <div className={classes.loginSecondDiv}>
                <TextField 
                    id="outlined-basic" 
                    label='Password'
                    error = {!!error.password}
                    helperText={error.password}
                    value = {password}
                    variant='outlined'
                    type = 'password'
                    size = 'medium'
                    onChange = {(event) => passwordUpdater(event)}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline
                                }
                            }}
                
                />
             </div>
            <div className = {classes.loginBtnDiv}>
                <Button 
                    disabled = {!username || !password}
                    variant="contained" 
                    color="primary"
                    size='large'
                    onClick={btnClick}
                    style={{backgroundColor:'#8B4513',
                    color:'#FFDAB9'}}
                >
                    Log In
                </Button>
            </div>
        </div>
    
        
    );

}
export default LogIn;