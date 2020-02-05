import React,{useState,useEffect} from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import {styles} from './styles';
import axios from 'axios';


export default function Delete(props) {
    const [currentUser, setCurrentUser] = useState(props.currentUser);
    const [error, setError] = useState({});
    const [reasonText,setReasonText] =useState('');
    const [password, setPassword] = useState('');
 

console.log(props.users);
/*
  const logOut = () => {
    localStorage.removeItem('username');
    props.history.replace('/main');
  }
  */
  const handleDelete = () =>  {
      
    let errorCheck = false;
    
    
    if(password !== currentUser[8]){
        error.password = 'Wrong password';
        errorCheck = true;
    }else
    
   {
        error.password = '';
    }
    
    
    if(!errorCheck){
            let user = currentUser[0];
      
            user = JSON.stringify(user);
            let formData = new FormData();
            formData.append("userDelete", user);
            const url = `http://localhost/index.php`;
            axios.post(url,formData)
                .then(
                function(res){
                    console.log('Success !');
                    
                }
                )
                .catch(err => console.log(err));
         
                localStorage.removeItem('username',currentUser[3]);
                props.onClose();
               // logOut();
               //props.history replace y error er talis dra hamar gone removeItem em arel local.Storage ic
               localStorage.removeItem('username');
               props.logOut();
               props.replaceHistory('/main');
                
               
                
          
            
        }
        
        setError({...error});
        
        
  };
     
       
  
  const classes = styles();

    return (
        
        
      <Dialog
        open={true}
        onClose={props.onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Delete profile</DialogTitle>
        <DialogContent>
            <p>Please type the reason for leaving </p>
        <TextField 
            
            id="outlined-basic" 
            label=''
            value = {reasonText}
            type = 'text'
            size = 'medium'
            margin="dense"
            fullWidth
            onChange = {(event) => setReasonText(event.target.value)}
            InputProps={{
                classes: {
                    notchedOutline: classes.notchedOutline
                        }
                    }}
        />
        <TextField 
            
            id="outlined-basic" 
            label='Password'
            error = {!!error.password}
            helperText={error.password}
            value = {password}
            type = 'password'
            size = 'medium'
            margin="dense"
            fullWidth
            onChange = {(event) => setPassword(event.target.value)}
            InputProps={{
                classes: {
                    notchedOutline: classes.notchedOutline
                        }
                    }}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary">
            Cancel
          </Button>
          <Button 
          onClick={handleDelete} 
          color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  }


Delete.propTypes = {
    
  onClose: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  replaceHistory: PropTypes.func.isRequired

  
};