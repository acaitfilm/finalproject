import React,{useState,useEffect} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import axios from 'axios';
import Footer from './footer';
import Header from './header';
import Button from '@material-ui/core/Button';

function Seats(props){
    const [currentUser, setCurrentUser] = useState([]);
    const [seats, setSeats] = useState([]);
    const [userRequest, setUserRequest] = useState([
        ['Fast and Furious', '5.99$', 'Sold', '12/12/2020', 20],
        ['Fast and Furious', '5.99$',  'Booked', '12/12/2020', 1],
        ['Fast and Furious', '5.99$',  'Sold', '12/12/2020', 3],
        ['Fast and Furious', '5.99$',  'Sold', '12/12/2020', 16],
        ['Fast and Furious', '5.99$',  'Booked', '12/12/2020', 23],
        ['Fast and Furious', '5.99$',  'Sold', '12/12/2020', 8],
        ['Fast and Furious', '5.99$',  'Sold', '12/12/2020', 19],
        ['Fast and Furious', '5.99$',  'Booked', '12/12/2020', 24],
        ['Fast and Furious', '5.99$',  'Sold', '12/12/2020', 22],
        ['Fast and Furious', '5.99$',  'Sold', '12/12/2020', 12],
        ['Fast and Furious', '5.99$',  'Sold', '12/12/2020', 7],
        ['Fast and Furious', '5.99$',  'Sold', '12/12/2020', 5],
        ['Fast and Furious', '5.99$',  'Booked', '12/12/2020', 14],
        ['Fast and Furious', '5.99$',  'Booked', '12/12/2020', 33],
    ]);
    const [currentRadio, setCurrentRadio] = useState(-1);
    useEffect(() => {
        let seatsArr = [];
        for(let index = 50; index > 0; index--){
            seatsArr.push(index);
        }
        setSeats(seatsArr);
        if(localStorage.getItem('username')){
            updateUsers();
        }
        document.title = 'Sign Up now!';
    },[]);
    const updateCurrentRadio = (item) => {
        console.log(currentRadio);
        let radioValue = -1, isFree = true;
        for(let index = 0; index < userRequest.length; index++){
            if(userRequest[index][4] === item){
                isFree = false;
                break;
            }
        }
        if(radioValue !== item){
            radioValue = item;
        }
        if(isFree){
            setCurrentRadio(radioValue);
        }
    }
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
                    arrOfUsers.map(array => {
                        if(array[3] === localStorage.getItem('username')){
                            setCurrentUser(array);
                        }
                        return true;
                    });
                }
                )
                .catch(err => console.log(err));
    }
    const checkIsSold = (checkItem) => {
        let requestStatus = 'Free';
        for(let index = 0; index < userRequest.length; index++){
            if(userRequest[index][2] === 'Sold' && checkItem === userRequest[index][4]){
                requestStatus = 'Sold';
            }else if(userRequest[index][2] === 'Booked' && checkItem === userRequest[index][4]){
                requestStatus = 'Booked';
            }
        }
        return requestStatus;
    }
    const logOut = () => {
        localStorage.removeItem('username');
        props.history.replace('/main');
    }
    const replaceHistory = (newAddress) => {
        props.history.replace(newAddress);
    }
    const changeCheckoutStyles = (borderRadius) => {
        let item = document.getElementById('checkout');
        item.style.borderRadius = borderRadius + 'px';
        item.style.transition = '0.2s';
    }
    if(currentRadio === -1){
        window.scrollTo( 500, 0 );
    }
    return (
        <>
        <Header 
            logout = {logOut} 
            replaceHistory = {replaceHistory} 
            currentUser = {currentUser}
        />
        <div style = {{marginTop:'3%'}}>
            <div style = {{marginLeft:'24.8%'}}>
            <FormControlLabel
                    disabled = {true}
                    checked = {true}
                    value="right"
                    control={<Radio color="secondary" />}
                    label='Sold'
                    //labelPlacement="right"
                />
                <FormControlLabel
                    style = {{paddingLeft:'23.5%'}}
                    checked = {true}
                    value="right"
                    control={<Radio style = {{color:'orange'}} />}
                    label='Booked'
                    //labelPlacement="right"
                />
                <FormControlLabel
                    style = {{paddingLeft:'21.3%'}}
                    checked = {false}
                    value="right"
                    control={<Radio color="secondary" />}
                    label='Free'
                    //labelPlacement="right"
                />
            </div>
        </div>
        <div style = {{width:'52%',marginLeft:'23%',marginTop:'5%'}}>
            {
                seats.map((item,index) => (
                    <FormControlLabel
                        key = {index}
                        disabled = {checkIsSold(item) === 'Sold'}
                        checked = {checkIsSold(item) === 'Sold' || checkIsSold(item) === 'Booked' || currentRadio === item}
                        value="top"
                        onClick = {() => updateCurrentRadio(item)}
                        control={<Radio style = {checkIsSold(item) === 'Booked' ? {color:'orange'}: checkIsSold(item) !== 'Sold' ? {color:'secondary'}:{color:'secondary'}}/>}
                        label={item}
                        labelPlacement="top"
                    />
                ))
            }
        </div>
        <div style = {{textAlign:'center', fontSize:'190%', marginTop:'4.5%',backgroundColor:'rgb(234, 65, 101)', color:'white', display:'inline-block',width:'47.5%',marginLeft:'25%',borderRadius:'10px', padding:'1.4% 0% 1.4% 0%', fontWeight:'bold'}}>
            Screen
        </div>
        <div style = {{marginLeft:'42.5%',marginTop:'5.8%'}}>
            <Button 
                id = 'checkout'
                variant="contained" 
                style = {currentRadio !== -1 ? {width:'200px',height:'67px', boxShadow:'0 0 0 0', backgroundColor:'rgb(234, 65, 101)', color:'white',borderRadius:'4px', fontSize:'140%', fontWeight:'bold'} : {width:'200px',height:'67px', boxShadow:'0 0 0 0', opacity:'0.67', backgroundColor:'rgb(189,189,189)', color:'white',borderRadius:'4px', fontSize:'140%', fontWeight:'bold'}}
                onMouseOver = {() => changeCheckoutStyles(26)}
                onMouseOut = {() => changeCheckoutStyles(4)}
            >
                Checkout
            </Button>
        </div>
      <Footer/>
        </>
    );
}

export default Seats;