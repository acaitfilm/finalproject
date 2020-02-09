import React, {useState,useEffect} from 'react';
import Header from './header';
import axios from 'axios';
import Footer from './footer';
import { Link }  from 'react-router-dom';
import {styles} from './styles';

function NotFound(props){
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
            <div style = {{fontWeight:'bold', fontSize:'360%',marginLeft:'10%', marginTop:'11%'}}>
                404 Not Found!
            </div>
            <div style = {{fontSize:'160%', marginTop:'3%', marginLeft:'10%', paddingBottom:'8%'}}>
                URL is invalid, please try again.
            </div>
            <div style = {{marginTop:'-11%',marginLeft:'62%', fontSize:'190%', position:'absolute'}} className = {classes.mainBookBuyBtns}>
                <Link to = '/main' style = {{textDecoration:'none', color:'rgb(234, 65, 101)'}}>
                    Back Home
                </Link>
            </div>
            <Footer/>
        </>
    );
}
export default NotFound;