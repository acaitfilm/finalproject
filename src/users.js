import React, {useState, useEffect} from 'react';
import './styles.css';
import Header from './header';
import {styles} from './styles';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import userIcon from './userIcon.png';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
//import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Delete from './delete';
import pic1 from './filmpics/1.jpg';
import pic2 from './filmpics/2.jpg';
import pic3 from './filmpics/3.jpg';
import pic4 from './filmpics/4.jpg';
import pic5 from './filmpics/5.jpg';
import pic6 from './filmpics/6.jpeg';
import pic15 from './filmpics/15.jpg';
import pic8 from './filmpics/8.jpg';
import pic9 from './filmpics/9.jpg';
import pic10 from './filmpics/10.jpeg';

function User(props){
    const [currentUser,setCurrentUser] = useState([]);
    const [userPic, setUserPic] = useState(null);
    const [showEdit,setShowEdit] = useState(false);
    const [showDelete,setShowDelete] = useState(false);
    const [showDesc,setShowDesc] = useState(false);
    const [error, setError] = useState({});
    const [firstname, setFirstname] = useState(currentUser[1]);
    const [lastname, setLastname] = useState(currentUser[2]);
    const [username, setUsername] = useState(currentUser[3]);
    const [email, setEmail] = useState(currentUser[4]);
    const [phone, setPhone] = useState(currentUser[5]);
    const [password, setPassword] = useState(currentUser[8]);
    const [gender, setGender] = useState(currentUser[6]);
    const [value1,setValue1] = useState(0);
    const [value2,setValue2] = useState(0);
    const [value3,setValue3] = useState(0);
    const [value4,setValue4] = useState(0);
    const [value5,setValue5] = useState(0);
    const [value6,setValue6] = useState(0);
    const [value7,setValue7] = useState(0);
    const [value8,setValue8] = useState(0);
    const [value9,setValue9] = useState(0);
    const [value10,setValue10] = useState(0);
    const [users,setUsers] = useState([]);
    
    
    useEffect(() => {
          updateUsers(); 

    },[]);
    const logOut = () => {
        localStorage.removeItem('username');
        props.history.replace('/main');
    }
    const replaceHistory = (newAddress) => {
        props.history.replace(newAddress);
    }
    
    
  
    const updateUsers = () => {
        let formData = new FormData();
        formData.append("userGet", 1);
            const url = `http://localhost/index.php`;
            axios.post(url,formData)
                .then(
                function(res){
                    let arrOfUsers = [];
                    while(res.data.length){
                        arrOfUsers.push(res.data.splice(0,9));
                    }
                    
                   
                    setUsers(arrOfUsers);
                    arrOfUsers.map((array,index) => {
                        if(array[3] === localStorage.getItem('username')){
                            setCurrentUser(array);
                            arrOfUsers.splice(index,1);

                            
                        }
                        return true;
                    });
                    
                }
                )
                .catch(err => console.log(err));
    }
    
   
   
    
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

const validatePassword = password => {
    if(password.match(/[a-z]/g) && password.match( 
        /[A-Z]/g) && password.match( 
        /[0-9]/g) && password.match( 
        /[^a-zA-Z\d]/g)){
            return true;
        }
        return false;
}
const handleSave = () =>  {
      
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
    }else
    
   {
        error.password = '';
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

    if(!errorCheck){
        
        let user=[
            currentUser[0],
            firstname,
            lastname,
            username,
            email,
            phone,
            gender,
            currentUser[7],
            password,
            //userPic

            
        ];
       
      setCurrentUser(user);
        user = JSON.stringify(user);
            let formData = new FormData();
            formData.append("userUpdate", user);
            const url = `http://localhost/index.php`;
            axios.post(url,formData)
                .then(
                function(res){
                    console.log('Success !');
                    
                }
                )
                .catch(err => console.log(err));
            localStorage.setItem('username',username);
            onEditClose();
            
            
        }
        setError({...error});
        
        
  };

  const handleKeyPress = (event) =>{
    const {keyCode} = event;
    //stex senc em grel ,vor datarki depkum chkatarvi,heto kpoxenq
    if(keyCode === 13 && !!firstname && !!lastname && !!username && !!password && !!email && !!gender && !!phone){ 
        handleSave();
    }
} 
useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });
    const picSelectedHandler = (e) => {
        setUserPic(URL.createObjectURL(e.target.files[0]));
       
       
        //stex uzum ei null y poxarinei cher linum veragrelov
        //currentUser.length = 9;
        //currentUser.push(userPic);
        //console.log(currentUser);
         
       
    }
    const visualChange = (id, color, backGroundColor) => {
        document.getElementById(id).style.color = color;
        document.getElementById(id).style.backgroundColor = backGroundColor;
       
    }
  

    const onEditClose = ()=>{
        setShowEdit(false);
    }
    const onDeleteClose = () =>{
        setShowDelete(false);
    }
    
    
/*
    const picUploadHandler = () => {
        console.log(currentUser);
        let user = JSON.stringify(currentUser);
        let formData = new FormData();
        formData.append("userUpdate", user);
        const url = `http://localhost/index.php`;
            axios.post(url,formData)
            .then(
                function(res){
                    console.log(res);
                console.log('Success of update image!');
                
            }
            )
            .catch(err => console.log(err));
        

    }
    */
   document.body.style.backgroundColor='#FFF5EE';
    const classes = styles();
    document.title = currentUser[1]+' '+currentUser[2];
    return (
        <>
            
            <Header 
                logout = {logOut} 
                replaceHistory = {replaceHistory} 
                currentUser = {currentUser}
            />
            <div className={classes.userInfoDiv}>
                
               { userPic === null ?
                    
                 <img src={userIcon} style={{width:'240px',height:'240px',border:'2px solid rgba(234, 65, 101)'}} alt ='' /> 
               : 
                 <img src= {userPic} style={{width:'240px',height:'240px',border:'2px solid rgba(234, 65, 101)'}} alt='' />
                 
               }
                   


                <div> 
                    <label for={classes.picUpload} id='fileUpload'
                        
                        style = {{cursor:'pointer', fontSize:'17px',fontWeight:'bold', color:'rgba(234, 65, 101)',borderRadius:'3px',backgroundColor:'white',  boxShadow:'0px 0px',position:'absolute',left:'30%',top:'95%'}}
                    
                    >
                    <input id={classes.picUpload} type="file" style={{display: 'none'}} onChange={picSelectedHandler}/>
                        Edit photo
                    </label>
               </div>
                
               {showEdit === false ? <div 
                    className={classes.personalInfo}>
                     <h2 style={{textAlign:'center'}}> {currentUser[1]+' '+currentUser[2]}</h2>
                     <p><b>Username: </b>{currentUser[3]} </p>
                     <p><b>Email: </b>{currentUser[4]} </p>
                     <p><b>Phone: </b>{currentUser[5]} </p>
                     <p><b>Gender: </b>{currentUser[6]} </p>
                     <Button
                        id='editBtn'
                        variant="contained"
                        color = 'primary'
                        onClick = {()=>setShowEdit(true)}
                        onMouseOver = {() => visualChange('editBtn','rgba(234, 65, 101)', 'rgba(246, 246, 246)')}
                        onMouseOut = {() => visualChange('editBtn','white','rgba(234, 65, 101)')}
                        style = {{cursor:'pointer', fontWeight:'bold', backgroundColor:'rgba(234, 65, 101)', borderRadius:'8px', boxShadow:'0px 0px',position:'relative',
                        left:'70px',}}
                     >Edit</Button>
                    </div>
                     :<div className={classes.personalInfoEdit}>
                         <h3 style={{color:'rgba(234, 65, 101)',textAlign:'center'}}>Edit your profile</h3>
                         <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Fistname"
                            error = {!!error.firstname}
                            helperText={error.firstname}
                            value={firstname}
                            onChange={(event)=>{firstnameUpdater(event)}}
                            style={{marginLeft:'15px'}}
                        />
                        <TextField
                            
                            margin="dense"
                            id="name"
                            label="Lastname"
                            error = {!!error.lastname}
                            helperText={error.lastname}
                            value={lastname}
                            onChange={(event)=>{lastnameUpdater(event)}}
                            style={{marginLeft:'15px'}}
                        />
                        <TextField
                            
                            margin="dense"
                            id="name"
                            label="Username"
                            error = {!!error.username}
                            helperText={error.username}
                            value={username}
                            onChange={(event) =>{usernameUpdater(event)}}
                            style={{marginLeft:'15px'}}
                        />
                        <TextField
                            
                            margin="dense"
                            id="name"
                            label="Email"
                            error = {!!error.email}
                            helperText={error.email}
                            value={email}
                            onChange={(event) =>{setEmail(event.target.value)}}
                            style={{marginLeft:'15px'}}
                        />
                        
                            <TextField
                                
                                value = {phone}
                                error = {!!error.phone}
                                helperText = {error.phone}
                                margin="dense"
                                onChange = {(event) => {
                                setPhone(event.target.value);
                                }}
                                label = 'Phone'
                                style={{marginLeft:'15px'}}
                            /> 
                            
            
                    <p style={{marginLeft:'15px'}}>Gender</p>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={gender}
                    variant='outlined'
                    onChange={(event) => setGender(event.target.value)}
                    style={{height:'40px',width:'100px',marginLeft:'15px'}}
                    
                    >
                    <MenuItem value={currentUser[6]}>{currentUser[6]}</MenuItem>
                    <MenuItem value={currentUser[6] === 'Male'?'Female':'Male'}>{currentUser[6] === 'Male'?'Female':'Male'}</MenuItem>
                    <MenuItem value={'none'}>None</MenuItem>
                    </Select>
                    
                    <TextField 
                        
                        id="outlined-basic" 
                        label='Password'
                        error = {!!error.password}
                        helperText={error.password}
                        value = {password}
                        type = 'password'
                        margin="dense"
                        onChange = {(event) => setPassword(event.target.value)}
                        style={{marginLeft:'15px',marginBottom:'20px'}}
                     />
                
                        <p 
                        style={{marginLeft:'15px',  textDecoration: 'underline',cursor:'pointer'}}
                        onClick={() =>{setShowDelete(true);setShowEdit(false)}}
                        > 
                        Want to delete your account?
                        </p>

                    
                     <div className={classes.cancel}>
                      <Button 
                        id ='cancel'
                        onClick={onEditClose} 
                        color="primary"
                        onMouseOver = {() => visualChange('cancel','rgba(234, 65, 101)', 'rgba(246, 246, 246)')}
                        onMouseOut = {() => visualChange('cancel','white','rgba(234, 65, 101)')}
                        style = {{cursor:'pointer', fontWeight:'bold', backgroundColor:'rgba(234, 65, 101)',color:'white', borderRadius:'8px', boxShadow:'0px 0px',position:'relative',
                        left:'70px',}}
                     >
                            Cancel
                        </Button>
                        <Button 
                        id='save'
                         onClick={handleSave} 
                         color="primary"
                        onMouseOver = {() => visualChange('save','rgba(234, 65, 101)', 'rgba(246, 246, 246)')}
                        onMouseOut = {() => visualChange('save','white','rgba(234, 65, 101)')}
                        style = {{cursor:'pointer', fontWeight:'bold', backgroundColor:'rgba(234, 65, 101)',color:'white', borderRadius:'8px', boxShadow:'0px 0px',position:'relative',
                        left:'70px',}}
                       
                        >
                            save
                        </Button>
                        </div>
                        
            
                </div>

               }
           
                <div className={classes.watchedText}><h2 >You watched</h2></div>
                <br></br>
                <div className={classes.seenFilmsDiv}>
                        <div className={classes.seenPics}>
                            <img id='pic1' src={pic1} style={{width: '200px',height: '270px',cursor:'pointer'}} alt ='' 
                            onMouseOver={()=>{document.getElementById('pic1').style.opacity='0.6'}}
                                onMouseOut={()=>{document.getElementById('pic1').style.opacity='1'}}>
                                    </img>Your rating
                        <Box 
                        component="fieldset" 
                        mb={3} 
                        borderColor="transparent"
                        style={{position:'relative',marginLeft:'32%',marginTop:'-15%'}}
                        >
                                
                                <Rating
                                
                                name="simple-controlled1"
                                value={value1}
                                onChange={(event, newValue) => {
                                    setValue1(newValue);
                                }}
                                />
                            </Box>
                        </div>
                        <div className={classes.seenPics}>
                            <img 
                                id='pic2'
                                src={pic2} 

                                onMouseOver={()=>{document.getElementById('pic2').style.opacity='0.6'}}
                                onMouseOut={()=>{document.getElementById('pic2').style.opacity='1'}}
                                style={{width: '200px',height: '270px',cursor:'pointer'}}
                                alt =''>
                                    
                            </img>
                            Your rating
                            <Box 
                            component="fieldset" 
                            mb={3} 
                            borderColor="transparent"
                            style={{position:'relative',marginLeft:'32%',marginTop:'-15%'}}
                            >     
                                <Rating
                                
                                name="simple-controlled2"
                                value={value2}
                                onChange={(event, newValue) => {
                                    setValue2(newValue);
                                }}
                                />
                            </Box>
                        </div>
                        <div className={classes.seenPics}>
                            <img id='pic3' src={pic3} style={{width: '200px',height: '270px',cursor:'pointer'}}alt =''
                            onMouseOver={()=>{document.getElementById('pic3').style.opacity='0.6'}}
                            onMouseOut={()=>{document.getElementById('pic3').style.opacity='1'}}>
                            </img>Your rating
                        <Box 
                        component="fieldset" 
                        mb={3} 
                        borderColor="transparent"
                        style={{position:'relative',marginLeft:'32%',marginTop:'-15%'}}
                        >
                                
                                <Rating
                                
                                name="simple-controlled3"
                                value={value3}
                                onChange={(event, newValue) => {
                                    setValue3(newValue);
                                }}
                                />
                            </Box>
                        </div>
                        <div className={classes.seenPics}>
                            <img id='pic4'src={pic4} style={{width: '200px',height: '270px',cursor:'pointer'}} alt =''
                            onMouseOver={()=>{document.getElementById('pic4').style.opacity='0.6'}}
                            onMouseOut={()=>{document.getElementById('pic4').style.opacity='1'}}
                            ></img>Your rating
                        <Box 
                        component="fieldset" 
                        mb={3} 
                        borderColor="transparent"
                        style={{position:'relative',marginLeft:'32%',marginTop:'-15%'}}
                        >
                                
                                <Rating
                                
                                name="simple-controlled4"
                                value={value4}
                                onChange={(event, newValue) => {
                                    setValue4(newValue);
                                }}
                                />
                            </Box>
                        </div>
                        <div className={classes.seenPics}>
                            <img id='pic5'src={pic5} style={{width: '200px',height: '270px',cursor:'pointer'}} alt =''
                                onMouseOver={()=>{document.getElementById('pic5').style.opacity='0.6'}}
                                onMouseOut={()=>{document.getElementById('pic5').style.opacity='1'}}
                            ></img>Your rating
                            <Box 
                            component="fieldset" 
                            mb={3} 
                            borderColor="transparent"
                            style={{position:'relative',marginLeft:'32%',marginTop:'-15%'}}
                            >
                                    
                                    <Rating
                                    
                                    name="simple-controlled5"
                                    value={value5}
                                    onChange={(event, newValue) => {
                                        setValue5(newValue);
                                    }}
                                    />
                                </Box>
                        </div>
                        <div className={classes.seenPics}>
                            <img id='pic6' src={pic6} style={{width: '200px',height: '270px',cursor:'pointer'}} alt =''
                                onMouseOver={()=>{document.getElementById('pic6').style.opacity='0.6'}}
                                onMouseOut={()=>{document.getElementById('pic6').style.opacity='1'}}
                        ></img>Your rating
                        <Box 
                        component="fieldset" 
                        mb={3} 
                        borderColor="transparent"
                        style={{position:'relative',marginLeft:'32%',marginTop:'-15%'}}
                        >
                                
                                <Rating
                                
                                name="simple-controlled6"
                                value={value6}
                                onChange={(event, newValue) => {
                                    setValue6(newValue);
                                }}
                                />
                            </Box>
                        </div>
                        <div className={classes.seenPics}>
                            <img id='pic7'src={pic15} style={{width: '200px',height: '270px',cursor:'pointer'}}alt =''
                                onMouseOver={()=>{document.getElementById('pic7').style.opacity='0.6'}}
                                onMouseOut={()=>{document.getElementById('pic7').style.opacity='1'}}
                            ></img>Your rating
                        <Box 
                        component="fieldset" 
                        mb={3} 
                        borderColor="transparent"
                        style={{position:'relative',marginLeft:'32%',marginTop:'-15%'}}
                        >
                                
                                <Rating
                                
                                name="simple-controlled7"
                                value={value7}
                                onChange={(event, newValue) => {
                                    setValue7(newValue);
                                }}
                                />
                            </Box>
                        </div>
                        <div className={classes.seenPics}>
                            <img id='pic8'src={pic8} style={{width: '200px',height: '270px',cursor:'pointer'}} alt =''
                                onMouseOver={()=>{document.getElementById('pic8').style.opacity='0.6'}}
                                onMouseOut={()=>{document.getElementById('pic8').style.opacity='1'}}
                            ></img>Your rating
                        <Box 
                        component="fieldset" 
                        mb={3} 
                        borderColor="transparent"
                        style={{position:'relative',marginLeft:'32%',marginTop:'-15%'}}
                        >
                                
                                <Rating
                                
                                name="simple-controlled8"
                                value={value8}
                                onChange={(event, newValue) => {
                                    setValue8(newValue);
                                }}
                                />
                            </Box>
                        </div>
                        <div className={classes.seenPics}>
                            <img id='pic9'src={pic9} style={{width: '200px',height: '270px',cursor:'pointer'}} alt =''
                                onMouseOver={()=>{document.getElementById('pic9').style.opacity='0.6'}}
                                onMouseOut={()=>{document.getElementById('pic9').style.opacity='1'}}
                            ></img>Your rating
                        <Box 
                        component="fieldset" 
                        mb={3} 
                        borderColor="transparent"
                        style={{position:'relative',marginLeft:'32%',marginTop:'-15%'}}
                        >
                                
                                <Rating
                                
                                name="simple-controlled9"
                                value={value9}
                                onChange={(event, newValue) => {
                                    setValue9(newValue);
                                }}
                                />
                            </Box>
                        </div>
                        <div className={classes.seenPics}>
                            {!showDesc ? 
                            
                                <img id ='pic10'src={pic10} style={{width: '200px',height: '270px',cursor:'pointer'}} alt =''
                                onMouseOver={()=>setShowDesc(true)}
                               // onMouseOut={()=>{document.getElementById('pic10').style.opacity='1'}}
                            />
                            
                            :<>
                                    <img id ='pic10'src={pic10} style={{width: '200px',height: '270px',opacity:'0.6'}} alt =''
                                        onMouseOut={()=>setShowDesc(false)}
                                    />
                                    <div className={classes.descriptionTextDiv}>
                                        <p style={{cursor:'pointer',border:'1px solid rgba(234, 65, 101)',backgroundColor:'white',color:'rgba(234, 65, 101)'}}>Description</p>
                                     
                                    </div>
                               </>
                            }Your rating
                        <Box 
                        component="fieldset" 
                        mb={3} 
                        borderColor="transparent"
                        style={{position:'relative',marginLeft:'32%',marginTop:'-15%'}}
                        >
                                
                                <Rating
                                
                                name="simple-controlled10"
                                value={value10}
                                onChange={(event, newValue) => {
                                    setValue10(newValue);
                                }}
                                />
                            </Box>
                        </div>
                </div>

                {showDelete && 
                    
                    <Delete
                        
                        currentUser = {currentUser}
                        onClose = {onDeleteClose}
                        logOut = {logOut}
                        replaceHistory={replaceHistory}
                       
                        
                     />
                     }
            </div>
        </>
    );
}



export default User;