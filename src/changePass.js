import React,{useState} from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {styles} from './styles';
import axios from 'axios';

export default function ChangePW(props) {
    const [currentUser, setCurrentUser] = useState(props.currentUser);
    const [error, setError] = useState({});
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');


    const validatePassword = password => {
        if(password.match(/[a-z]/g) && password.match( 
            /[A-Z]/g) && password.match( 
            /[0-9]/g) && password.match( 
            /[^a-zA-Z\d]/g)){
                return true;
            }
            return false;
    }
    const handleChange = () =>  {
      
        let errorCheck = false;
        if(currentPassword !== currentUser[8]){
            error.currentPassword = 'Wrong password';
            errorCheck = true;
        }else{
            error.currentPassword = '';
        }
        if(!validatePassword(newPassword)){
            error.newPassword = 'Too weak password.';
            errorCheck = true;
        }else if(newPassword.length < 8){
            error.newPassword = 'Your password is too short.';
            errorCheck = true;
        }else
        
       {
            error.newPassword = '';
        }
        
        if(!errorCheck){
               let arr =[currentUser[0],newPassword];
          
                arr = JSON.stringify(arr);
                let formData = new FormData();
                formData.append("pwChange", arr);
                const url = `http://localhost/index.php`;
                axios.post(url,formData)
                    .then(
                    function(res){
                        console.log('Success !');
                        
                    }
                    )
                    .catch(err => console.log(err));
                    props.onClose();
                    
            }
            setError({...error});  
      };


    const classes = styles();
    return  (

        <Dialog
          open={true}
          onClose={props.onClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Change password</DialogTitle>
          <DialogContent>
              
          <TextField 
              
              id="outlined-basic" 
              label='currentPassword'
              error = {!!error.currentPassword}
              helperText={error.currentPassword}
              value = {currentPassword}
              type = 'password'
              size = 'medium'
              margin="dense"
              fullWidth
              onChange = {(event) => setCurrentPassword(event.target.value)}
              InputProps={{
                  classes: {
                      notchedOutline: classes.notchedOutline
                          }
                      }}
            />
       
          <TextField 
              
              id="outlined-basic" 
              label='newPassword'
              error = {!!error.newPassword}
              helperText={error.newPassword}
              value = {newPassword}
              type = 'password'
              size = 'medium'
              margin="dense"
              fullWidth
              onChange = {(event) => setNewPassword(event.target.value)}
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
            onClick={handleChange} 
            color="primary"
            disabled={!currentPassword || !newPassword}
            >
              Change
            </Button>
          </DialogActions>
        </Dialog>
      );

}


ChangePW.propTypes = {
    onClose: PropTypes.func.isRequired,
  };