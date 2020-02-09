import React from 'react';
import {styles} from './styles';
import Button from '@material-ui/core/Button';

function Film(props){
    const classes = styles();
    const getSeats = () => {
        props.props.history.replace('/getseats');
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
                    style = {{marginLeft:'-36.6%',position:'absolute', marginTop:'-5%',textAlign:'left',fontSize:'160%'}}
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
                <div onClick = {() => getSeats()} className = {classes.mainBookBuyBtns}>
                        Buy ticket
                </div>
                <div onClick = {() => getSeats()} className = {classes.mainBookBuyBtns} style = {{marginLeft:' 63%'}}>
                        Book ticket
                </div>
            </div>
        </div>
    );
}

export default Film;