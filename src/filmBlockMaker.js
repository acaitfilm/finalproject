import React from 'react';
import {styles} from './styles';
import Button from '@material-ui/core/Button';

function Film(props){
    const classes = styles();
    const getSeats = (action) => {
        if(!localStorage.getItem("username")){
            props.props.history.replace('/login');
        }
        let jsonReq = JSON.stringify(createRequest(action));
        localStorage.setItem('currentRequest',jsonReq);
        props.props.history.replace('/getseats');
    }
    const createRequest = (action) => {
        let reqObj = {
            filmname: props.name,
            filmdate: props.date,
            filmtime: props.hours,
            action: action,
            filmcost: props.cost
        }
        return reqObj;
    }
    return(
        <div 
            className = {classes.filmBlockMainDiv}
        >
            <div
                className = {classes.filmBlockClockHolder} 
                style = {{marginTop:'9%'}}
            >
                <span className = {classes.filmBlockTitleHolder} 
                    style = {{marginLeft:'-37.2%',position:'absolute', marginTop:'-5%',textAlign:'left',fontSize:'160%'}}
                >
                    {props.name + ' (' + props.type + ')'}
                </span>
                <span style = {{marginLeft:'30%', position:'absolute', marginTop:'-4.2%',fontWeight:'bold'}}>
                    {props.hours}
                </span>
            </div>
            <div
                className = {classes.filmBlockBlockHolder} 
            >
                <div 
                    className = {classes.filmBlockImageHolder}
                >
                    <img 
                        src = {props.image}
                        className = {classes.filmBlockImage}
                        style={{width: '300px',height: '390px',cursor:'pointer'}}
                        alt=''
                    />
                </div>
                <div 
                    className = {classes.filmBlockMainTextHolder}
                >
                    <div 
                        className = {classes.filmBlockDescriptionHolder}
                    >
                        <Button variant="outlined" color="secondary" style = {{cursor:'default',border: '3px solid rgba(234, 65, 101)', borderRadius:'10px', fontWeight:'bold', fontSize:'120%'}}>
                            Description
                        </Button>
                    </div>
                    <div 
                        className = {classes.filmBlockDescriptionTextHolder}
                    >
                        {props.description}
                    </div>
                </div>
                <div style = {{position:'absolute', marginTop:'4.8%', marginLeft:'5%', fontSize:'190%', fontWeight:'bold', textAlign:'center', color:'rgba(234, 65, 101', width:'19.2%'}}>
                        {props.genre}
                </div>
                <div onClick = {() => getSeats("Sold")} className = {classes.mainBookBuyBtns}>
                        Buy ticket
                </div>
                <div onClick = {() => getSeats("Booked")} className = {classes.mainBookBuyBtns} style = {{marginLeft:' 63%'}}>
                        Book ticket
                </div>
            </div>
        </div>
    );
}

export default Film;