import React, {useState} from 'react';
import './styles.css';
import Header from './header';
function Main(props){
    const logOut = () => {
        localStorage.removeItem('username');
        props.history.replace('/main');
    }
    const replaceHistory = (newAddress) => {
        props.history.replace(newAddress);
    }
    document.title = 'Choose your film to watch';
    document.body.style.backgroundImage='';
    return(
        <>
            <Header logout = {logOut} replaceHistory = {replaceHistory}/>
            <div style = {{backgroundColor:'rgba(234, 65, 101)'}}>
                <div className = 'firstPic'></div>
                <div className = 'secondPic'></div>
                <div className = 'thirdPic'></div>
                <div className = 'fourthPic'></div>
                <div className = 'fifthPic'></div>
            </div>
        </>
    );
}

export default Main;