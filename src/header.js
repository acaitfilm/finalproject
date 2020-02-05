import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import './styles.css';
import {styles} from './styles';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


function Header(props){
    const classes = styles();
    const visualChange = (id, color, backGroundColor) => {
        document.getElementById(id).style.color = color;
        document.getElementById(id).style.backgroundColor = backGroundColor;
        //document.getElementById(id).style.boxShadow = '0px 0px';
    }
    //console.log(props.currentUser);
    return (
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
                        className={classes.headerInput}
                        placeholder="Search For Movies"
                        style = {{color:'rgba(234, 65, 101)', fontSize:'115%'}}
                    />
                    <IconButton 
                        type="submit" 
                        className={classes.iconButton} 
                        aria-label="search" 
                        style = {{color:'rgba(234, 65, 101)'}}>
                        <SearchIcon 
                            style = {{color:'rgba(234, 65, 101)'}} 
                            fontSize = 'large' />
                    </IconButton>
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
                                    onClick = {() => props.replaceHistory('/user')}
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
    );
}

export default Header;