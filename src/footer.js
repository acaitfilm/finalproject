import React, {useState} from 'react';
import {styles} from './styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Switch from '@material-ui/core/Switch';
import axios from 'axios';

function Footer(props){
    const [isLight, setIsLight] = useState(localStorage.getItem('theme') === 'lightMode' ? true : false);
    const classes = styles();
    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const changeTheme = () => {
        localStorage.setItem('theme', localStorage.getItem('theme') === 'lightMode' ? 'darkMode' : 'lightMode');
        setIsLight(!isLight);
    }
    return (
        <div
            className = {classes.headerContainer}
        >
            <div
                className = {classes.footerMainDiv}
                style = {{marginTop:'7%'}}
            >
                <div 
                    onClick = {backToTop}
                    style = {{textAlign:'center', paddingBottom:'3%'}}>
                    <span className = {classes.footerBackToTopText}>
                        Back To Top
                    </span>
                    <ArrowBackIosIcon style = {{transform: 'rotate(90deg)', marginTop:'0.5%', marginLeft:'0.5%',position:'absolute', color:'rgb(150,150,150)'}}/>
                </div>
                <div style = {{marginLeft:'47%', paddingBottom:'4%',paddingTop:'2%'}}>
                    <FormControl component="fieldset">
                        <FormLabel style = {{color:'rgb(150,150,150)', fontWeight:'bold', cursor:'default', fontSize:'120%'}} component="legend">
                            {localStorage.getItem('theme') === 'lightMode' ? 'Light mode' : 'Dark mode'} 
                        </FormLabel>
                        <span style = {{marginLeft:'33%', paddingTop:'5%'}}>
                            <FormGroup>
                                <FormControlLabel
                                control={<Switch checked={localStorage.getItem('theme') === 'lightMode' ? true : false} onChange={() => changeTheme()} />}
                                />
                            </FormGroup>
                        </span>
                    </FormControl>
                </div>
                <div style = {{position:'absolute', width:'100%', marginLeft:'-7.7%'}}>
                    <ul style = {{listStyleType:'none', width: '100%', margin: 'auto', fontSize:'110%'}}>
                        <li style = {{float:'left', paddingLeft:'23%',}}>
                            <FacebookIcon className = {classes.footerSocialMedia}/>
                        </li>
                        <li style = {{float:'left', paddingLeft:'23%'}}>
                            <InstagramIcon className = {classes.footerSocialMedia}/>
                        </li>
                        <li style = {{float:'left', paddingLeft:'23%'}}>
                            <TwitterIcon className = {classes.footerSocialMedia}/>
                        </li>
                    </ul>
                </div>
                <div style = {{position:'absolute',width:'50%', marginLeft:'23.7%', color:'rgb(150,150,150)', marginTop:'11%'}}>
                    <ul style = {{listStyleType:'none', width: '100%', margin: 'auto', fontSize:'110%'}}>
                        <li style = {{float:'left', paddingLeft:'16%'}}>
                            <span className = {classes.footerLanguages}>
                                Русский 
                            </span>
                        </li>
                        <li style = {{float:'left', paddingLeft:'16%'}}>
                            <span className = {classes.footerLanguages}>
                                English
                            </span>
                        </li>
                        <li style = {{float:'left', paddingLeft:'16%'}}>
                            <span className = {classes.footerLanguages}>
                                Հայերեն
                            </span>
                        </li>
                    </ul>
                </div>
                <div
                    className = {classes.footerRights}
                >
                    All rights reserved &copy;
                </div>
            </div>
        </div>
    );
}

export default Footer;