import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {styles} from './styles';
import MuiPhoneNumber from "material-ui-phone-number";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
    Link
} from 'react-router-dom';

function SignUp(props){
    const [error, setError] = useState({});
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('None');
    const [person, setPerson] = useState('None');
    const [adminPassword, setAdminPassword] = useState('');
    const [users, setUsers] = useState([]);
    
    const firstnameUpdater = (event) => {
        //firstname u lastname dashterum toxnuma menak tarer grel
        if(!(/^[a-zA-Z]+$/.test(event.target.value)) && event.target.value !== ''){
            return;
        }
        //arachin tar@ sarquma mecatar u jnjuma avelord bacatner@
        let str = '';
        if(event.target.value.length){
            str = (event.target.value[0].toUpperCase() + event.target.value.slice(1)).trim();
        }
        setFirstname(str);
    }
    const lastnameUpdater = (event) => {
        if(!(/^[a-zA-Z]+$/.test(event.target.value)) && event.target.value !== ''){
            return;
        }
        let str = '';
        if(event.target.value.length){
            str = (event.target.value[0].toUpperCase() + event.target.value.slice(1)).trim();
        }
        setLastname(str);
    }
    const usernameUpdater = (event) => {
        let str = '';
        if(event.target.value.length){
            str = (event.target.value.toLowerCase()).trim();
        }
        setUsername(str);
    }
    const emailUpdater = (event) => {
        setEmail(event.target.value);
    }
    const passwordUpdater = (event) => {
        setPassword(event.target.value);
    }
    const confirmPasswordUpdater = (event) => {
        setConfirmPassword(event.target.value);
    }
    const phoneUpdater = (value) => {
        setPhone(value);
    }
    const genderUpdater = (event) => {
        setGender(event.target.value);
    }
    const personUpdater = (event) => {
        setPerson(event.target.value);
    }
    const adminPasswordUpdater = (event) => {
        setAdminPassword(event.target.value);
    }
    const validateEmail = () => {
        let symbols = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return symbols.test(email);
    }
    //username@ kara lini A-Z, a-z, 0-9, u ._ simvolneric baxkacac
    const checkUsername = () => {
        let symbols = /^[a-z0-9\._]+$/g;
        return symbols.test(username);
    }
    //stuguma firstname, lastname linen anpayman tarer
    const checkName = (name) => {
        let symbols = /^[A-Za-z]+$/g;
        return symbols.test(name);
    }
    const idGenerator = () => {
        localStorage.setItem('currentID',+localStorage.getItem('currentID') + 1);
        return localStorage.getItem('currentID');
    }
    const validatePassword = password => {
        if(password.match(/[a-z]/g) && password.match( 
            /[A-Z]/g) && password.match( 
            /[0-9]/g) && password.match( 
            /[^a-zA-Z\d]/g)){
                return true;
            }
            return false;
    }
    //databaseic stanum es userneri list
    const updateUsers = () => {
        let formData = new FormData();
        formData.append("userGet", 1);
            const url = `http://127.0.0.1/index.php`;
            axios.post(url,formData)
                .then(
                function(res){
                    let arrOfUsers = [];
                    while(res.data.length){
                        arrOfUsers.push(res.data.splice(0,9));
                    }
                    setUsers(arrOfUsers);
                }
                )
                .catch(err => console.log(err));
    }
    const handleKeyPress = (event) =>{
        const {keyCode} = event;
        //stex senc em grel ,vor datarki depkum chkatarvi,heto kpoxenq
        if(keyCode === 13 && !!firstname && !!lastname && !!username && !!password && !!confirmPassword && !!email && !!gender && !!person && !!phone && (person === 'Admin' ? !!adminPassword : true)){ 
            btnPushed();
        }
    } 
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      });
    useEffect(() => {
        if(!localStorage.getItem('currentID')){
            idGenerator();
        }
        updateUsers();
        document.title = 'Sign Up now!';
    },[]);

    //submiti pahna, stuguma formi validacian

    const btnPushed = () => {
        if(localStorage.getItem('currentID') === undefined){
            localStorage.setItem('currentID', -1);
        }
        let errorCheck = false;
        if(firstname.length < 2 || firstname.length > 15){
            error.firstname = 'From 2 to 15 symbols.';
            errorCheck = true;
        }else if(!checkName(firstname)){
            error.firstname = 'Enter valid First Name.'
            errorCheck = true;
        }else{
            error.firstname = '';
        }
        if(lastname.length < 2 || lastname.length > 15){
            error.lastname = 'From 2 to 15 symbols.';
            errorCheck = true;
        }else if(!checkName(lastname)){
            error.lastname = 'Enter valid Last Name.'
            errorCheck = true;
        }else{
            error.lastname = '';
        }
        if(!validateEmail()){
            error.email = 'Please, enter valid email.';
            errorCheck = true;
        }else{
            //stuguma ka tenc mail databaseum te che... hakarak depqum chi toxnelu sign up lini :)
            let hasEmail = false;
            users.map((arr) => {
                if(arr[4] === email){
                    hasEmail = true;
                }
                return true;
            });
            if(hasEmail){
                errorCheck = true;
                error.email = 'Email address already exists.';
            }else{
                error.email = '';
            }
        }
        if(phone.length !== 12){
            error.phone = 'Please, enter valid local phone number.';
            errorCheck = true;
        }else{
            //stuguma ka tenc phone number databaseum te che
            let hasPhone = false;
            users.map((arr) => {
                if(arr[5] === phone){
                    hasPhone = true;
                }
                return true;
            });
            if(hasPhone){
                errorCheck = true;
                error.phone = 'Phone number already exists.';
            }else{
                error.phone = '';
            }
        }
        if(!validatePassword(password)){
            error.password = 'Too weak password.';
            errorCheck = true;
        }else if(password.length < 8){
            error.password = 'Your password is too short.';
            errorCheck = true;
        }else{
            error.password = '';
        }
        if(confirmPassword !== password){
            error.confirmpassword = 'Passwords do not match';
            errorCheck = true;
        }else{
            error.confirmpassword = '';
        }
        if(username.length < 3 || username.length > 15){
            error.username = 'From 3 to 15 symbols.';
            errorCheck = true;
        }
        else if(!checkUsername()){
            error.username = 'Username is not valid.';
            errorCheck = true;
        }else if(username[0] === '_' || username[0] === '.' || !isNaN(username[0])){
            error.username = "Can't start with symbol.";
            errorCheck = true;
        }else{
            let hasUsername = false;
            users.map((arr) => {
                if(arr[3] === username){
                    hasUsername = true;
                }
                return true;
            });
            if(hasUsername){
                errorCheck = true;
                error.username = 'Username already exists.';
            }else{
                error.username = '';
            }
        }
        if(person === 'Admin' && adminPassword !== 'adminpass123'){
            error.admin = "Wrong admin password";
            errorCheck = true;
        }else{
            error.admin = '';
        }
        //ete validationi het xndir chka sarquma array
        if(!errorCheck){
            let id = localStorage.getItem('currentID');
            let user = [
                id,
                firstname,
                lastname,
                username,
                email,
                phone,
                gender,
                person,
                password,
            ];
            idGenerator();
            //uxarkuma PHP, vorn el grancuma ir hertin tvyalner@ SQLum, shat grakan stacvec :D
            user = JSON.stringify(user);
            let formData = new FormData();
            formData.append("userSet", user);
            const url = `http://127.0.0.1/index.php`;
            axios.post(url,formData)
                .then(
                function(res){
                    console.log('Success!');
                }
                )
                .catch(err => console.log(err));
            localStorage.setItem('username',username);
            props.history.replace("/main");
        }
        setError({...error});
    }
    const classes =  styles();
    return (
        <>
        <div 
            className = {classes.signupMainDiv}
        >
            <div 
                className = {classes.signupMainText}>
                Sign Up Now!
            </div>
            <div 
                className = {classes.signupSecondDiv}>
            <TextField 
                id="outlined-basic" 
                label='First Name'
                error = {!!error.firstname}
                helperText={error.firstname}
                value = {firstname}
                variant='outlined'
                size = 'medium'
                onChange = {(event) => firstnameUpdater(event)}
            />
            <TextField 
                id="outlined-basic" 
                label='Last Name'
                error = {!!error.lastname}
                helperText={error.lastname}
                value = {lastname}
                variant='outlined'
                size = 'medium'
                onChange = {(event) => lastnameUpdater(event)}
                style = {{marginLeft:'10%'}}
            />
            </div>
                <br/>
                <div className = {classes.signupSecondDiv}>
                <TextField 
                id="outlined-basic" 
                label='Username'
                error = {!!error.username}
                helperText={error.username}
                value = {username}
                variant='outlined'
                className = 'loginSecondDiv'
                size = 'medium'
                onChange = {(event) => usernameUpdater(event)}
            />
            <FormControl
                style = {{marginLeft:'10%'}}
            >
            <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={person}
        variant='outlined'
        onChange={(event) => personUpdater(event)}
        >
        <MenuItem value={'None'}>None</MenuItem>
        <MenuItem value={'User'}>User</MenuItem>
        <MenuItem value={'Admin'}>Admin</MenuItem>
        </Select>
            </FormControl>
            <FormControl
                style = {{marginLeft:'1.5%'}}
            >
            <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={gender}
        variant='outlined'
        onChange={(event) => genderUpdater(event)}
        >
        <MenuItem value={'None'}>None</MenuItem>
        <MenuItem value={'Male'}>Male</MenuItem>
        <MenuItem value={'Female'}>Female</MenuItem>
        </Select>
            </FormControl>
            </div>
            <div>
            <TextField 
            id="outlined-basic" 
            type='password'
            label='Security code'
            error = {!!error.admin}
            helperText={error.admin}
            value = {adminPassword}
            variant='outlined'
            size = 'medium'
            onChange = {(event) => adminPasswordUpdater(event)}
            style = {person !== 'Admin' ? {display:'none'} : {marginLeft:'33.5%', marginTop:'1.5%', width:'33.7%'}}

        />
            </div>
            <div className = {classes.signupThirdDiv}>
            <MuiPhoneNumber 
                value = {phone}
                error = {!!error.phone}
                helperText = {error.phone}
                onChange = {(value) => {
                    phoneUpdater(value);
                }}
                defaultCountry={'am'}
                style={{width:'20.3%'}}
                variant = 'outlined'
                label = 'Phone'
            /> 
            <TextField 
            id="outlined-basic" 
            label='Email'
            error = {!!error.email}
            helperText={error.email}
            value = {email}
            variant='outlined'
            size = 'medium'
            onChange = {(event) => emailUpdater(event)}
            style = {{marginLeft:'10%'}}
        />
            
            </div>
            <div className = {classes.signupThirdDiv}>
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
        />
        <TextField 
            id="outlined-basic" 
            label='Confirm Password'
            error = {!!error.confirmpassword}
            helperText={error.confirmpassword}
            value = {confirmPassword}
            variant='outlined'
            size = 'medium'
            type = 'password'
            onChange = {(event) => confirmPasswordUpdater(event)}
            style = {{marginLeft:'10%'}}
        />
            </div>
            <div className = {classes.signUphaveAnAccount}>
                <Link to="/login">
                    Already have an account? Log In
                </Link>
            </div>
            <div className = {classes.signupSignUpDiv}>
                <Button 
                    disabled = {!firstname || !lastname || !email || !username || !phone || !password || gender === 'None' || person === 'None' || !confirmPassword}
                    variant="contained" 
                    color="primary"
                    size='large'
                    onClick={btnPushed}
                >
                    Sign Up!
                </Button>
            </div>
        </div>
        </>
    );
}

export default SignUp;