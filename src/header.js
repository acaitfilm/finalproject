import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import './styles.css';
import {styles} from './styles';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { TableBody } from '@material-ui/core';

function Header(props){
    const [searchValue, setSearchValue] = useState('');
    const [currentFilms, setCurrentFilms] = useState([
        [1,'Fast and Furious 4','Action','2011'],
        [2, 'Running Scared','Criminal','2006'],
        [3, 'Nemo', 'Adventures', '2005'],
        [4, 'Insidious 3','Horror','2015'],
        [5, 'College','Comedy','2016'],
        [6, 'Insidious 2','Horror','2013'],
    ]);
    const searchValueUpdater = (event) => {
        let str = '';
        if(event.target.value.length > 0){
            str = event.target.value[0].toUpperCase() + event.target.value.slice(1);
        }else{
            str = event.target.value;
        }
        setSearchValue(str);
    }
    useEffect(() => {
        updateFilms();
    }, []);
    const updateFilms = () => {
        let formData = new FormData();
        formData.append("filmsGet", 1);
            const url = `http://127.0.0.1/index.php`;
            axios.post(url,formData)
                .then(
                function(res){
                    let arrOfFilms = [];
                    while(res.data.length){
                        arrOfFilms.push(res.data.splice(0,9));
                    }
                    //setCurrentFilms(arrOfFilms);
                }
                )
                .catch(err => console.log(err));
    }
    const changeBlockStyle = (id, bgColor, color) => {
        document.getElementById(id).style.backgroundColor = bgColor;
        document.getElementById(id).style.color = color;
    }
    //setInterval(updateFilms, 15000);
    const classes = styles();
    const visualChange = (id, color, backGroundColor) => {
        document.getElementById(id).style.color = color;
        document.getElementById(id).style.backgroundColor = backGroundColor;
    }
    let filmsCount = 0;
    const createFilmBlock = (filmName, filmGenre, filmDate, count) => {
        return <>
            <div 
                id = {filmName}
                onMouseOver = {() => changeBlockStyle(filmName, 'rgb(234, 65, 101)', 'white')}
                onMouseOut = {() => changeBlockStyle(filmName, count % 2 === 0 ? 'rgb(241, 241, 241)' : 'rgb(246, 246, 246)', 'black')}
                style = {filmsCount % 2 === 0 ? {backgroundColor:'rgba(241, 241, 241)', padding:'1% 4% 4% 4%', cursor:'pointer'} : {backgroundColor:'rgba(246, 246, 246)', padding:'1% 4% 4% 4%', cursor:'pointer'}}
            >
                <ul style = {{listStyleType:'none', fontSize:'130%', marginLeft:'14%', fontWeight:'bold'}}
                >
                    <li style = {{float:'left', width:'30%'}}>
                        {filmName}
                    </li>
                    <li style = {{float:'left', width:'20%'}}>
                        {filmGenre}
                    </li>
                    <li style = {{float:'left', width:'20%'}}>
                        {filmDate}
                    </li>
                    <li style = {{float:'left', width:'20%'}}>
                        See more
                    </li>
                </ul>
            </div>
        </>
    }
    const nothingFound = () => {
        return <>
            <div style = {{marginTop:'1%',backgroundColor:'rgba(246, 246, 246)', padding:'1% 4% 4% 4%', cursor:'pointer', textAlign:'center',fontWeight:'bold',fontSize:'140%'}}>
                Nothing Found
            </div>
        </>
    }
    let checkFilms = 0;
    return (
        <>
        <div 
            className = {classes.headerContainer}
        >
            <div 
                className = {classes.headerMainDiv}
            >
                <div 
                    onClick = {() => props.replaceHistory('/main')} 
                    className = {classes.headerIcon}
                >
                    <img 
                        alt = 'header' 
                        src = "logo.png" 
                        width = "26%" 
                        className = {classes.logoImage}
                    />
                    <span 
                        className = {classes.headerIconText}
                    >
                        Cinema's name
                    </span>
                </div>
                <div 
                    className = {classes.headerSearch}
                >
                    <InputBase
                        id = 'searchfield'
                        type = 'search'
                        className={classes.headerInput}
                        placeholder="Search For Movies"
                        style = {{color:'rgba(234, 65, 101)', fontSize:'115%'}}
                        onChange = {(event) => searchValueUpdater(event)}
                        value = {searchValue}
                    />
                </div>
                {
                    localStorage.getItem('username') ? <Fragment>
                        <div 
                            className = {classes.headerUsernameHolder}
                        >
                            <PersonIcon
                                fontSize = 'large'
                                style = {{color:'rgba(234, 65, 101)'}}
                            />
                                <span    
                                    className = {classes.headerUsernameText}
                                >
                                    {localStorage.getItem('username')}
                                </span>
                        </div>
                        <div className = {classes.headerLogOut}>
                            <Button 
                                id = 'logout'
                                variant="contained"
                                fontSize = 'medium'
                                color = 'primary'
                                onClick = {() => props.logout()}
                                onMouseOver = {() => visualChange('logout','rgba(234, 65, 101)', 'rgba(246, 246, 246)')}
                                onMouseOut = {() => visualChange('logout','white','rgba(234, 65, 101)')}
                                style = {{fontWeight:'bold', backgroundColor:'rgba(234, 65, 101)', borderRadius:'8px', boxShadow:'0px 0px'}}
                            >
                                Log Out
                            </Button>
                        </div>
                    </Fragment> : <Fragment>
                    <div 
                        className = {classes.headerWelcome} 
                    >
                            <Button 
                                id = 'welcome'
                                variant="contained"
                                color = 'primary'
                                style = {{cursor:'default', fontWeight:'bold', color:'rgba(234, 65, 101)', backgroundColor:'rgba(246, 246, 246)', borderRadius:'8px', boxShadow:'0px 0px'}}
                            >
                                Welcome
                            </Button>
                        </div>
                    <div 
                        className = {classes.headerLogInBtn}
                    >
                            <Button 
                                id = 'login'
                                variant="contained"
                                color = 'primary'
                                onClick = {() => props.replaceHistory('/login')}
                                onMouseOut = {() => visualChange('login','rgba(234, 65, 101)', 'rgba(246, 246, 246)')}
                                onMouseOver = {() => visualChange('login','white','rgba(234, 65, 101)')}
                                style = {{fontWeight:'bold', color:'rgba(234, 65, 101)', backgroundColor:'rgba(246, 246, 246)', borderRadius:'8px', boxShadow:'0px 0px'}}
                            >
                                Log In
                            </Button>
                        </div>
                        <div 
                            className = {classes.headerSignUpBtn}
                        >
                            <Button 
                                id = 'signup'
                                variant="contained"
                                color = 'primary'
                                onClick = {() => props.replaceHistory('/signup')}
                                onMouseOut = {() => visualChange('signup','rgba(234, 65, 101)', 'rgba(246, 246, 246)')}
                                onMouseOver = {() => visualChange('signup','white','rgba(234, 65, 101)')}
                                style = {{fontWeight:'bold', color:'rgba(234, 65, 101)', backgroundColor:'rgba(246, 246, 246)', borderRadius:'8px', boxShadow:'0px 0px'}}
                            >
                                Sign Up
                            </Button>
                        </div>
                    </Fragment>
                }
            </div>
        </div>
        {

            searchValue ? 
                <div 
                    style = {{width:'100%', marginTop:'-1%', backgroundColor:'rgba(246, 246, 246)',paddingBottom:'0px',opacity:'1'}}
                >
                    {
                        currentFilms.map(function(film, index){
                            if((film[1].match(searchValue) || film[2].match(searchValue) || film[3].match(searchValue)) && checkFilms < 6){
                                checkFilms++;
                                filmsCount++;
                                return createFilmBlock(film[1],film[2],film[3],filmsCount);
                            }else if(index === currentFilms.length - 1 && !checkFilms){
                                return nothingFound();
                            }
                            return true;
                        })
                    }
                </div> : false
        }
        </>
    );
}

export default Header;