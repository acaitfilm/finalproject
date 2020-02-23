import React, {useState,useEffect} from 'react';
import {styles} from './styles';
import PropTypes from "prop-types";
import axios from 'axios';
import Button from '@material-ui/core/Button';

export default function FilmList(props){
    const [list, setList] = useState([]);


    useEffect(() => {
        getUserList(); 

  },[]);
    const getUserList = () =>{
        let formData = new FormData();
        formData.append("userListGet", 1);
          const url = `http://localhost/index.php`;
          axios.post(url,formData)
              .then(
              function(res){
                  console.log(res);
                  let arrOfUsers = [];
                  while(res.data.length){
                      arrOfUsers.push(res.data.splice(0,6));
                  }
                  
                  setList(arrOfUsers);
               }
              )
              .catch(err => console.log(err));
    }
    console.log(list);

    const classes = styles();
    return (
        <div className={classes.addFilms}>
            <table style = {{textAlign:'center', width:'94%', marginLeft:'3%', borderCollapse:'collapse'}}>
            <tr style = {{color:'rgb(234, 65, 101)'}}>
                <th style = {{padding:'2%'}}>
                    Name
                </th>
                <th style = {{padding:'0.5%'}}>
                    Username
                </th>
                <th style = {{padding:'2%'}}>
                    Email
                </th>
                <th style = {{padding:'2%'}}>
                    Phone
                </th>
                <th style = {{padding:'2%'}}>
                    Gender
                </th>
                
            
            </tr>
                {
                    list.map((arr,index) => (
                        <tr
                            style = {index % 2 === 0 ? {backgroundColor:'#f8f8f8'} : {}}
                            key = {index}
                        >
                            <td style = {{padding:'2%',width:'16%'}}>
                                {arr[0]+' '+arr[1]}
                            </td>
                            <td style = {{padding:'2%'}}>
                                {arr[2]}
                            </td>
                            
                            <td style = {{padding:'2%',width:'14%'}}>
                                {arr[3]}
                            </td>
                            <td style = {{padding:'2%'}}>
                                {arr[4]}
                            </td>
                            <td style = {{padding:'2%'}}>
                                {arr[5]}
                            </td>
                        
                        

                        </tr>
                    ))
                }
            </table>
        </div>
    );
}