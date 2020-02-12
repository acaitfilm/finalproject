import React,{useState,useEffect} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import axios from 'axios';
import Footer from './footer';
import './styles.css';
import Header from './header';
import Button from '@material-ui/core/Button';

function Seats(props){
    const [currentUser, setCurrentUser] = useState([]);
    const [changeStateSpeed, setChangeStateSpeed] = useState(10);
    const [seats, setSeats] = useState([]);
    const [userRequest, setUserRequest] = useState([]);
    const [currentRadio, setCurrentRadio] = useState(-1);
    useEffect(() => {
        setCurrentRadio(-1);
        let seatsArr = [];
        for(let index = 50; index > 0; index--){
            seatsArr.push(index);
        }
        setSeats(seatsArr);
        if(localStorage.getItem('username')){
            updateUsers();
        }
        document.title = 'Get your seats now!';
    },[]);
    const updateCurrentRadio = (item) => {
        let radioValue = -1, isFree = true;
        for(let index = 0; index < userRequest.length; index++){
            if(parseInt(userRequest[index][5]) === item){
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
    const renderManually = () => {
        setChangeStateSpeed(changeStateSpeed + 10 * changeStateSpeed);
    }
    setTimeout(renderManually,changeStateSpeed);
    const updateUsers = () => {
        let formData = new FormData();
        formData.append("userRequestInfo", 1);
            const url = `http://127.0.0.1/index.php`;
            axios.post(url,formData)
                .then(
                function(res){
                    let arrOfRequests = [];
                    while(res.data.length){
                        arrOfRequests.push(res.data.splice(0,7));
                    }
                    let currFilm = localStorage.getItem('currentRequest');
                    currFilm = JSON.parse(currFilm);
                    let currentFilmRequests = [];
                    arrOfRequests.map(array => {
                        if(array[1] === currFilm.filmname){
                            currentFilmRequests.push(array);
                        }
                        console.log(currentFilmRequests);
                        setUserRequest(currentFilmRequests);
                        return true;
                    });
                }
                )
                .catch(err => console.log(err));
    }
    const checkIsSold = (checkItem) => {
        let requestStatus = 'Free';
        for(let index = 0; index < userRequest.length; index++){
            if(userRequest[index][6] === 'Sold' && checkItem === parseInt(userRequest[index][5])){
                requestStatus = 'Sold';
            }else if(userRequest[index][6] === 'Booked' && checkItem === parseInt(userRequest[index][5])){
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
    const checkoutCompleted = () => {
        let reqVal = localStorage.getItem('currentRequest');
        reqVal = JSON.parse(reqVal);
        let currentRequest = [
            userRequest.length,
            reqVal.filmname,
            reqVal.filmdate,
            reqVal.filmtime,
            reqVal.filmcost,
            parseInt(currentRadio),
            reqVal.action,
            localStorage.getItem('username'),
        ];
        currentRequest = JSON.stringify(currentRequest);
            let formData = new FormData();
            formData.append("userRequest", currentRequest);
            const url = `http://127.0.0.1/index.php`;
            axios.post(url,formData)
                .then(
                function(res){
                    console.log(res);
                }
                )
                .catch(err => console.log(err));
        props.history.replace('/checkoutcompleted')
    }
    console.log(userRequest);
    return (
        <>
        <Header 
            logout = {logOut} 
            replaceHistory = {replaceHistory} 
            currentUser = {currentUser}
        />
        <div style = {{marginTop:'3%'}}>
            <div style = {{textAlign:'center', marginLeft:'2%', fontWeight:'bold', fontSize:'190%', paddingBottom:'2.4%'}}>
                Get your seats now
            </div>
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
        <div style = {{textAlign:'center', fontSize:'190%', marginTop:'4.5%',backgroundColor:'rgb(190, 65, 101)', color:'white', display:'inline-block',width:'47.5%',marginLeft:'25%',borderRadius:'10px', padding:'1.4% 0% 1.4% 0%', fontWeight:'bold'}}>
            Screen
        </div>
        {
            currentRadio !== -1 ? 
            <>
            <div style = {{marginLeft:'32%',marginTop:'8%'}}>
            <Button 
                id = 'checkout'
                variant="contained" 
                style = {currentRadio !== -1 ? {width:'200px',height:'67px', boxShadow:'0 0 0 0', backgroundColor:'rgb(234, 65, 101)', color:'white',borderRadius:'4px', fontSize:'140%', fontWeight:'bold'} : {width:'200px',height:'67px', boxShadow:'0 0 0 0', opacity:'0.67', backgroundColor:'rgb(189,189,189)', color:'white',borderRadius:'4px', fontSize:'140%', fontWeight:'bold'}}
                onMouseOver = {currentRadio !== -1 ? () => changeCheckoutStyles(26) : false}
                onMouseOut = {() => changeCheckoutStyles(4)}
                onClick = {() => checkoutCompleted()}
            >
                Checkout
            </Button>
        </div>
        <div style = {{display:'inline-block', fontSize:'250%', marginTop:'-3.8%',position:'absolute', marginLeft:'52%',fontWeight:'bold'}}>
            {"Total:   " + userRequest[0][4]}
        </div>
            </> : false
        }
      <Footer/>
        </>
    );
}

export default Seats;