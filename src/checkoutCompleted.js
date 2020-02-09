import React, {useState,useEffect} from 'react';
import Header from './header';
import axios from 'axios';
import Footer from './footer';
import { Link }  from 'react-router-dom';
import {styles} from './styles';

function CheckoutCompleted(props){
    const [currentUser, setCurrentUser] = useState([]);
    const replaceHistory = (newAddress) => {
        props.history.replace(newAddress);
    }
    useEffect(() => {
        if(localStorage.getItem('username')){
            updateUsers();
        }
        document.title = 'Thank you!';
    },[]);
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
    const logOut = () => {
        localStorage.removeItem('username');
        props.history.replace('/main');
    }
    const classes = styles();
    window.scrollTo( 500, 0 );
    return (
        <>
            <Header 
                logout = {logOut} 
                replaceHistory = {replaceHistory} 
                currentUser = {currentUser}
            />
            <div style = {{fontWeight:'bold', fontSize:'360%',textAlign:'center', marginTop:'6.7%'}}>
                Thank You!
            </div>
            <div style = {{fontSize:'160%',textAlign:'center', marginTop:'3%', paddingBottom:'6.9%'}}>
                Your order has been successfully completed.
            </div>
            <div style = {{marginTop:'-2.5%', marginLeft:'45.5%',fontSize:'130%'}}  className = {classes.mainBookBuyBtns}>
                <Link to = '/main' style = {{textDecoration:'none', color:'rgb(234, 65, 101)'}}>
                    Back Home
                </Link>
            </div>
            <Footer/>
        </>
    );
}
export default CheckoutCompleted;