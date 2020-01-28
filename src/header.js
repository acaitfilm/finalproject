import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import './styles.css';
import {styles} from './styles.js';
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
        document.getElementById(id).style.boxShadow = '0px 0px';
    }
    return (
        <div 
            className = {classes.headerContainer}
        >
            <div style = {{padding:'2% 3% 2.5% 3%', backgroundColor:'rgba(246, 246, 246)'}}>
                <div onClick = {() => props.replaceHistory('/main')} style = {{width:'27%',height:'100px', marginLeft:'2%',cursor:'pointer',display:'inline-block'}}>
                    <img alt = 'header' src = "logo.png" width = "26%" style = {{display: 'inline-block'}}/>
                    <span style = {{position:'absolute', marginTop:'1.7%', marginLeft:'1%', fontSize:'240%', color:'rgba(238, 133, 99)'}}>Cinema's name</span>
                </div>
                <div style = {{position:'absolute', marginTop:'-5.3%', marginLeft:'37%'}}>
                <InputBase
                    className={classes.input}
                    placeholder="Search For Movies"
                    style = {{color:'rgba(234, 65, 101)', fontSize:'115%'}}
                    inputProps={{ }}
                />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search" style = {{color:'rgba(234, 65, 101)'}}>
                        <SearchIcon style = {{color:'rgba(234, 65, 101)'}} fontSize = 'large' />
                    </IconButton>
                </div>
                {
                    localStorage.getItem('username') ? <Fragment>
                        <div style = {{position:'absolute', right:'0', top:'39%', marginRight:'19%', width:'14%', cursor:'pointer'}}>
                            <PersonIcon
                                fontSize = 'large'
                                style = {{color:'rgba(234, 65, 101)'}}
                            />
                                <span 
                                    style = {{marginTop:'3%', paddingBottom:'1%', position:'absolute', marginLeft:'3%', color:'rgba(234, 65, 101)', fontWeight:'bold',fontSize:'110%'}}
                                    className = 'mainusernametext'
                                >
                                    vahanzakaryan
                                </span>
                        </div>
                        <div className = 'headerlogoutbutton' style = {{position:'absolute', right:'0', top:'39%', marginRight:'7%'}}>
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
                    <div className = 'headerlogoutbutton' style = {{position:'absolute', right:'0', top:'39%', marginRight:'26.5%'}}>
                            <Button 
                                id = 'welcome'
                                variant="contained"
                                color = 'primary'
                                style = {{cursor:'default', fontWeight:'bold', color:'rgba(234, 65, 101)', backgroundColor:'rgba(246, 246, 246)', borderRadius:'8px', boxShadow:'0px 0px'}}
                            >
                                Welcome
                            </Button>
                        </div>
                    <div className = 'headerlogoutbutton' style = {{position:'absolute', right:'0', top:'39%', marginRight:'17.25%'}}>
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
                        <div className = 'headerlogoutbutton' style = {{position:'absolute', right:'0', top:'39%', marginRight:'8%'}}>
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