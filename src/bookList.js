import React, {useState,useEffect} from 'react';
import {styles} from './styles';
import PropTypes from "prop-types";
import axios from 'axios';
import Button from '@material-ui/core/Button';


export default function BookedFilms(props){
    
    //const [list, setList] = useState([]);
    
    /*
    useEffect(() => {
        getUserBooks(); 

  },[]);
  
    const getUserBooks = () =>{
        //zaprosov stanum enk book arac kinoneri listy u setList() enk anum
    }
    */
   //function vory filter a anum zaprosov stacvac listic miayn currentUseri book-ery
    /*
    const filterList = (list)=>{
        return list.filter((arr)=>arr[10]===props.currentUser[3] && arr[9]==='Booked');
        
    }
    */
    const handleCancelBook = () =>{
        //zapros petka grvi, vory delete kani axyusakic tvyal booky
    }
/*
    const title = document.getElementById('book');
    title.innerHTML = 'You booked('+props.list.length+')';
    */
    const classes = styles();
    return(
        <div className={classes.seenFilmsDiv}>
                <table style = {{textAlign:'center', width:'94%', marginLeft:'3%', borderCollapse:'collapse'}}>
                <tr style = {{color:'rgb(234, 65, 101)'}}>
                    <th style = {{padding:'2%'}}>
                        Film
                    </th>
                    <th style = {{padding:'0.5%'}}>
                        Format
                    </th>
                    <th style = {{padding:'2%'}}>
                        Date
                    </th>
                    <th style = {{padding:'2%'}}>
                        Time
                    </th>
                    <th style = {{padding:'2%'}}>
                        Cost for book
                    </th>
                    <th style = {{padding:'2%'}}>
                        Cost for ticket
                    </th>
                    <th style = {{padding:'2%'}}>
                        Place
                    </th>
                    <th style = {{padding:'2%'}}>
                        Cancel your book
                    </th>
                </tr>
                    {
                        props.list.map((book,index) => (
                            <tr
                                style = {index % 2 === 0 ? {backgroundColor:'#f8f8f8'} : {}}
                                key = {index}
                            >
                                <td style = {{padding:'2%',width:'15%'}}>
                                    {book[1]}
                                </td>
                                <td style = {{padding:'2%'}}>
                                    {book[2]}
                                </td>
                                <td style = {{padding:'2%',width:'14%'}}>
                                    {book[3]}
                                </td>
                                <td style = {{padding:'2%',width:'14%'}}>
                                    {book[4]+' - '+book[5]}
                                </td>
                                <td style = {{padding:'2%'}}>
                                    {book[6]+'$'}
                                </td>
                                <td style = {{padding:'2%'}}>
                                    {book[7]+'$'}
                                </td>
                                <td style = {{padding:'2%',width:'15%'}}>
                                    {book[8]}
                                </td>
                                <td style = {{padding:'2%'}}>
                                <Button 
                                    id={'delete'+index}
                                    onClick={handleCancelBook} 
                                    color="primary"
                                    onMouseOver = {() => props.visualChange('delete'+index,'rgba(234, 65, 101)', 'rgba(246, 246, 246)')}
                                    onMouseOut = {() => props.visualChange('delete'+index,'white','rgba(234, 65, 101)')}
                                    style = {{cursor:'pointer', fontWeight:'bold', backgroundColor:'rgba(234, 65, 101)',color:'white', borderRadius:'8px', boxShadow:'0px 0px'}}
                                
                                    >
                                        Cancel
                                </Button>
                                </td>

                            </tr>
                        ))
                    }
                </table>
            </div>
    )
}


BookedFilms.propTypes = {
    visualChange:PropTypes.func.isRequired,  
  };