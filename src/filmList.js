import React, {useState,useEffect} from 'react';
import {styles} from './styles';
import PropTypes from "prop-types";
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Slide from '@material-ui/core/Slide';
//import Paper from '@material-ui/core/Paper';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function FilmList(props){
    const [list, setList] = useState([]);
    const [showRowEdit, setShowRowEdit] = useState(false);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(list[0]);


    useEffect(() => {
        getFilmList(); 

  },[]);
    const getFilmList = () =>{
        let formData = new FormData();
        formData.append("filmListGet", 1);
          const url = `http://localhost/index.php`;
          axios.post(url,formData)
              .then(
              function(res){
                  console.log(res);
                  let arrOfFilms = [];
                  while(res.data.length){
                      arrOfFilms.push(res.data.splice(0,7));
                  }
                  
                  setList(arrOfFilms);
               }
              )
              .catch(err => console.log(err));
    }
    console.log(list);

    const classes = styles();
    return (<>
    <div className={classes.addFilms}>
        <table style = {{textAlign:'center', width:'94%', marginLeft:'3%', borderCollapse:'collapse'}}>
        <tr style = {{color:'rgb(234, 65, 101)'}}>
            <th style = {{padding:'2%'}}>
                Film
            </th>
            <th style = {{padding:'0.5%'}}>
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
                Format
            </th>
            <th style = {{padding:'2%'}}>
                Edit session
            </th>
            <th style = {{padding:'2%'}}>
                Delete session 
            </th>
           
        </tr>
            {
                list.map((arr,index) => (
                    <tr 
                        id={'row'+index}
                        style = {index % 2 === 0 ? {backgroundColor:'#f8f8f8'} : {}}
                        key = {index}
                    >
                       {!showRowEdit ?
                        <td style = {{padding:'2%',width:'16%'}}>
                            {arr[0]}
                        </td> 
                        : <td><TextField
                   margin="dense"
                   id="name"
                   label="Name"
                   //error = {!!error.nameEng}
                   //helperText={error.nameEng}
                   value={name}
                   onChange={(event)=>setName(event.target.value)}
                   style={{marginLeft:'4%',marginTop:'-4%',width:'150px'}}
                /></td>
                        }
                        <td style = {{padding:'2%'}}>
                            {arr[1]}
                        </td>
                        
                        <td style = {{padding:'2%',width:'14%'}}>
                            {arr[2]+' - '+arr[3]}
                        </td>
                        <td style = {{padding:'2%'}}>
                            {arr[4]+'$'}
                        </td>
                        <td style = {{padding:'2%'}}>
                            {arr[5]+'$'}
                        </td>
                        <td style = {{padding:'2%',width:'15%'}}>
                            {arr[6]}
                        </td>
                        <td style = {{padding:'2%'}}>
                            <Button 
                                    id={'edit'+index}
                                    onClick={()=>{setShowRowEdit(true)}} 
                                    color="primary"
                                    onMouseOver = {() =>{ index % 2===0 ? props.visualChange('edit'+index,'rgba(234, 65, 101)', 'rgba(246, 246, 246)'):props.visualChange('edit'+index,'rgba(246, 246, 246)','rgba(234, 65, 101)')}
                                                    }
                                    onMouseOut = {() =>{ index % 2 ===0 ? props.visualChange('edit'+index,'white','rgba(234, 65, 101)'):props.visualChange('edit'+index,'rgba(234, 65, 101)','white')}}
                                    style = { index % 2 === 0 ? {backgroundColor:'rgba(234, 65, 101)',cursor:'pointer', fontWeight:'bold',color:'white', borderRadius:'8px', boxShadow:'0px 0px'} : {cursor:'pointer', fontWeight:'bold', backgroundColor:'white',color:'rgba(234, 65, 101)', borderRadius:'8px', boxShadow:'0px 0px'}}
                                
                                    >
                                        Edit
                                </Button>
                               {showRowEdit && <div >
                                   
                                    <Dialog 
                                        onClose={()=>setShowRowEdit(false)} 
                                        aria-labelledby="form-dialog-title"
                                        style={{width:'400px',height:'500px',top:'40%',left:'50%',position:'absolute'
                                        }}
                                        open={true}
                                    >
                                    <DialogTitle id="form-dialog-title">Edit session</DialogTitle>
                                    <DialogContent dividers>
                                    <span>Hii</span>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button autoFocus 
                                    //onClick={handleClose} 
                                    color="primary">
                                        Save changes
                                    </Button>
                                    </DialogActions>
                                </Dialog>
                                
                                </div>
                            }
                        </td>
                        <td style = {{padding:'2%'}}>
                            <Button 
                                    id={'del'+index}
                                    //onClick={handleCancelBook} 
                                    color="primary"
                                    onMouseOver = {() =>{ index % 2===0 ? props.visualChange('del'+index,'rgba(234, 65, 101)', 'rgba(246, 246, 246)'):props.visualChange('del'+index,'rgba(246, 246, 246)','rgba(234, 65, 101)')}
                                    }
                                    onMouseOut = {() =>{ index % 2 ===0 ? props.visualChange('del'+index,'white','rgba(234, 65, 101)'):props.visualChange('del'+index,'rgba(234, 65, 101)','white')}}
                                    style = { index % 2 === 0 ? {backgroundColor:'rgba(234, 65, 101)',cursor:'pointer', fontWeight:'bold',color:'white', borderRadius:'8px', boxShadow:'0px 0px'} : {cursor:'pointer', fontWeight:'bold', backgroundColor:'white',color:'rgba(234, 65, 101)', borderRadius:'8px', boxShadow:'0px 0px'}}
                                
                                    >
                                        Cancel
                                </Button>
                        </td>
                       

                    </tr>
                ))
            }
        </table>
    </div>
    
</>
    );
}

FilmList.propTypes = {
    visualChange:PropTypes.func.isRequired,  
  };






















/*
            <div >
            <Slide   direction="up" in={showRowEdit} timeout={1000}  >
            <Dialog 
                //onClose={()=>setShowRowEdit(false)} 
                aria-labelledby="form-dialog-title"
                style={{width:'400px',height:'500px',top:'40%',left:'50%',position:'absolute'
                }}
                open={true}
            >
            <DialogTitle  id="customized-dialog-title" 
                //onClose={handleClose}
            >
                Modal title
            </DialogTitle>
            <DialogContent dividers>
            <span>Hii</span>
            </DialogContent>
            <DialogActions>
            <Button autoFocus 
            //onClick={handleClose} 
            color="primary">
                Save changes
            </Button>
            </DialogActions>
            </Dialog>
            </Slide>
            </div>
*/