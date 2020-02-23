import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import PropTypes from "prop-types";
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import { TimePicker } from '@material-ui/pickers'
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

 

export default function AddFilm(props){
    const [addName,setAddName] = useState('');
    const [descEng,setDescEng] = useState('');
    const [descArm,setDescArm] = useState('');
    const [descRus,setDescRus] = useState('');
    const [date, setDate] = useState(null);
    const [start,setStart] = useState(null);
    const [end,setEnd] = useState(null);
    const [bookPriceEng,setBookPriceEng] = useState('');
    const [buyPriceEng,setBuyPriceEng] = useState('');
    const [bookPriceArm,setBookPriceArm] = useState('');
    const [buyPriceArm,setBuyPriceArm] = useState('');
    const [bookPriceRus,setBookPriceRus] = useState('');
    const [buyPriceRus,setBuyPriceRus] = useState('');
    const [type,setType] = useState('');
    const [sessions, setSessions] = useState([]);
    const [error,setError] = useState({});
   

    useEffect(() => {
        sessionsGet(); 

  },[]);
    const sessionsGet = () =>{
        let formData = new FormData();
        formData.append("timeGet", 1);
      const url = `http://localhost/index.php`;
      axios.post(url,formData)
          .then(
          function(res){
              console.log(res);
              let arrOfTime = [];
              while(res.data.length){
                  arrOfTime.push(res.data.splice(0,3));
              }
              setSessions(arrOfTime);
             //console.log(sessions);
            }
            )
            .catch(err => console.log(err));
    }
    console.log(sessions);
    const nameValidation = (event)=>{
        let value = event.target.value;
        if((!/^[A-Za-z0-9 ]+$/.test(value) && value!=='') || value.length>30){
            return;
        }
        let str = '';
        if(value.length){
            str = (value[0].toUpperCase() + value.slice(1))
        }
        setAddName(str);
    }
    const descEngValidation =(event)=>{
        let value=event.target.value;
        if((!/^[A-Za-z0-9\._,\- ]+$/.test(value) && value!=='') ||value.length>400){
            return;
        }
        let str = '';
        if(value.length){
          str = (value[0].toUpperCase() + value.slice(1))
      }
      setDescEng(str);

    }
    const descArmValidation =(event)=>{
      let value=event.target.value;
      if(value.length>400){
          return;
      }
      let str = '';
      if(value.length){
        str = (value[0].toUpperCase() + value.slice(1))
    }
    setDescArm(str);

  }
  const descRusValidation =(event)=>{
      let value=event.target.value;
      if((!/^[а-яА-ЯЁё0-9,\—\.\«\»\- ]+$/.test(value) && value !== '') ||value.length>400){
          return;
      }
      let str = '';
      if(value.length){
        str = (value[0].toUpperCase() + value.slice(1))
    }
    setDescRus(str);

  }
    const bookPriceEngValidation = (event) =>{
        let value = event.target.value;
        let symbols =/^([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/;
        if((!symbols.test(value) && value!=='') || value.length>7){
            return;
        }
       
        setBookPriceEng(value);
    }
    const bookPriceArmValidation = (event) =>{
        let value = event.target.value;
        let symbols = /^[1-9][0-9]*$/;
        if((!symbols.test(value) && value!=='') || value.length>4){
            return;
        }
        setBookPriceArm(value);
    }
    const bookPriceRusValidation = (event) =>{
        let value = event.target.value;
        let symbols = /([0-9]+(\.[0-9]+)?)/;
        if((!symbols.test(value) && value!=='') || value.length>6){
            return;
        }
        setBookPriceRus(value);
    }
    const buyPriceEngValidation = (event)=>{
        let value = event.target.value;
        let symbols =/^([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/;
        if((!symbols.test(value) && value!=='') || value.length>7){
            return;
        }
        setBuyPriceEng(value);
    }
    const buyPriceArmValidation = (event)=>{
        let value = event.target.value;
        let symbols = /^[1-9][0-9]*$/;
        if((!symbols.test(value) && value!=='') || value.length>4){
            return;
        }
        setBuyPriceArm(value);
    }
    const buyPriceRusValidation = (event)=>{
        let value = event.target.value;
        let symbols = /([0-9]+(\.[0-9]+)?)/;
        if((!symbols.test(value) && value!=='') || value.length>6){
            return;
        }
        setBuyPriceRus(value);
    }
    
    const yyyymd =(date)=> {
        let mm = date.getMonth() + 1;
        let dd = date.getDate();

        return [date.getFullYear(),
                    mm,
                    dd
        ].join('-');
      };
      
      const timeFormat = (date) =>{
        let minutes = date.getMinutes();
        let hours = date.getHours();
        return `${hours}:${minutes}`;
      }
      
      const timeValue = (time) => {
        time = time.slice(0,time.indexOf(':')) + time.slice(time.indexOf(':') + 1,time.length)
        return +time;
    }
    //date and time validation ??
    const handleAddFilm = () =>{
        let errorCheck = false;
            let strDate = yyyymd(date);
           
            let hasSession = false;
                let s = timeValue(timeFormat(start));
                let e= timeValue(timeFormat(end));
                //console.log(s);
                //console.log(e);
            sessions.map((arr) => {
                if(arr[0] === strDate){
                    console.log(arr[1]);
                    let checkStart = timeValue(arr[1]);
                    let checkEnd = timeValue(arr[2]);
                    if((s >= checkStart && s <= checkEnd) || (e >= checkStart && e <= checkEnd)){
                        hasSession = true;
                        console.log('not valid');

                        
                    }
                }
                return true;
                
            });
            //timepicker i error petka ta, bayc chi linum (((
            if(hasSession){
                errorCheck = true;
                error.sessions = 'Already exist'
            }
            else{
                    error.sessions = '';
                
            }
            
            if(!errorCheck){
                let session=[
                    addName,
                    descEng,
                    descArm,
                    descRus,
                    yyyymd(date),
                    timeFormat(start),
                    timeFormat(end),
                    bookPriceEng,
                    bookPriceArm,
                    bookPriceRus,
                    buyPriceEng,
                    buyPriceArm,
                    buyPriceRus,
                    type
                ];
               
                console.log(session);
                session = JSON.stringify(session);
                let formData = new FormData();
                formData.append("sessionSet", session);
                const url = `http://localhost/index.php`;
                axios.post(url,formData)
                    .then(
                    function(res){
                        console.log('Success!');
                        console.log(res);
                    }
                    )
                    .catch(err => console.log(err));
        
                    setAddName(''); 
                    setDescEng('');
                    setDescArm('');
                    setDescRus('');
                    setDate(null); 
                    setStart(null); 
                    setEnd(null);
                    setBookPriceEng('');
                    setBookPriceArm('');
                    setBookPriceRus('');
                    setBuyPriceEng('');
                    setBuyPriceArm('');
                    setBuyPriceRus('');
                    setType('');
            }

    }
    const classes = styles();
    return (<>
        <div className={classes.addFilms}>
            
            <TextField
                   margin="dense"
                   id="name"
                   label="Name"
                   //error = {!!error.nameEng}
                   //helperText={error.nameEng}
                   value={addName}
                   onChange={nameValidation}
                   style={{marginLeft:'32%',marginTop:'5%',width:'300px'}}
               />
               <div className={classes.descriptions}>
               <TextField
                        id="outlined-multiline"
                        label='Description'
                        multiline
                        color='secondary'
                        variant="outlined"
                        rows="4"
                        error = {!!error.descEng}
                        helperText={error.descEng}
                        value={descEng}
                        onChange={descEngValidation}
                        style={{marginTop:'15px',marginLeft:'15px',width:'200px'}}
                        />
               <TextField
                        id="outlined-multiline"
                        label='Նկարագրություն'
                        multiline
                        color='secondary'
                        variant="outlined"
                        rows="4"
                        error = { !!error.descArm}
                        helperText={ error.descArm }
                        value={ descArm }
                        onChange={descArmValidation}
                        style={{marginTop:'15px',marginLeft:'15px',width:'200px'}}
                        />
                       
                         <TextField
                        id="outlined-multiline"
                        label='Oписание'
                        multiline
                        color='secondary'
                        variant="outlined"
                        rows="4"
                        error = { !!error.descRus}
                        helperText={ error.descRus}
                        value={descRus}
                        onChange={descRusValidation}
                        style={{marginTop:'15px',marginLeft:'15px',width:'200px'}}
                        />

               </div>
               <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <KeyboardDatePicker
                    disableToolbar
                    autoOk='true'
                    minDate={new Date()}
                    variant="inline"
                    format='yyyy-M-d'
                    margin="normal"
                    id="date"
                    label="Date"
                    value={date}
                    onChange={(date)=>setDate(date)}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    style={{marginLeft:'32%',marginTop:'15%',width:'300px'}}
                />
                    <TimePicker
                        clearable
                        id='start'
                        error={!!error.sessions}
                        helperText={error.sessions}
                        ampm={false}
                        invalidLabel={error.sessions}
                        format='H:mm'
                        label='Start time'
                        value={start}
                        onChange={(date)=>{setStart(date);}}
                        style={{marginLeft:'32%',marginTop:'4%',width:'300px'}}
                    />
                     <TimePicker
                        clearable
                        id="end"
                        error={!!error.sessions}
                        helperText={error.sessions}
                        ampm={false}
                        format='H:mm'
                        label="End time"
                        value={end}
                        onChange={(date)=>{setEnd(date);}}
                        style={{marginLeft:'32%',marginTop:'4%',width:'300px'}}
                    />
                     </MuiPickersUtilsProvider>
                    <div className={classes.bookPrices}>
                        <FormControl  >
                        <InputLabel htmlFor="standard-adornment-amount" style={{marginTop:'5px',marginLeft:'23px'}}>
                            Price to book
                        </InputLabel>
                        <Input
                            id="book"
                            value={bookPriceEng}
                            onChange={bookPriceEngValidation}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            style={{marginTop:'15px',marginLeft:'23px',width:'155px'}}
                                />
                        </FormControl>
                        <FormControl>
                        <InputLabel htmlFor="standard-adornment-amount" style={{marginTop:'2px',marginLeft:'23px'}}>
                            Ամրագրման գումար
                        </InputLabel>
                        <Input
                            id="book"
                            value={bookPriceArm}
                            onChange={bookPriceArmValidation}
                            startAdornment={<InputAdornment position="start">֏</InputAdornment>}
                            style={{marginTop:'15px',marginLeft:'25px',width:'155px'}}
                                />
                        </FormControl>
                    
                    <FormControl >
                        <InputLabel htmlFor="standard-adornment-amount" style={{marginTop:'2px',marginLeft:'23px'}}>
                        Цена бронирования
                        </InputLabel>
                        <Input
                            id="book"
                            value={bookPriceRus}
                            onChange={bookPriceRusValidation}
                            startAdornment={<InputAdornment position="start">₽</InputAdornment>}
                            style={{marginTop:'15px',marginLeft:'25px',width:'155px'}}
                                />
                        </FormControl>
                        </div>
                        <div className={classes.buyPrices}>
                            <FormControl >
                            <InputLabel htmlFor="standard-adornment-amount" style={{marginTop:'5px',marginLeft:'25px'}}>
                                Price to buy
                            </InputLabel>
                            <Input
                                id="buy"
                                value={buyPriceEng}
                                onChange={buyPriceEngValidation}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                style={{marginTop:'15px',marginLeft:'25px',width:'155px'}}
                                    />
                            </FormControl>
                            <FormControl >
                                <InputLabel htmlFor="standard-adornment-amount" style={{marginTop:'5px',marginLeft:'25px'}}>
                                    Արժեք
                                </InputLabel>
                                <Input
                                    id="buy"
                                    value={buyPriceArm}
                                    onChange={buyPriceArmValidation}
                                    startAdornment={<InputAdornment position="start">֏</InputAdornment>}
                                    style={{marginTop:'15px',marginLeft:'25px',width:'155px'}}
                                        />
                            </FormControl>
                            <FormControl >
                                <InputLabel htmlFor="standard-adornment-amount" style={{marginTop:'5px',marginLeft:'25px'}}>
                                        Цена
                                </InputLabel>
                                <Input
                                    id="buy"
                                    value={buyPriceRus}
                                    onChange={buyPriceRusValidation}
                                    startAdornment={<InputAdornment position="start">₽</InputAdornment>}
                                    style={{marginTop:'15px',marginLeft:'25px',width:'155px'}}
                                        />
                        </FormControl>
                        </div>
                        <FormControl
                                style={{marginLeft:'38%',marginTop:'23%',width:'140px'}}
                            
                                
                            >
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={type}
                            variant='outlined'
                            onChange={(event) =>setType(event.target.value)}
                
                            >
                        
                            <MenuItem value={'2D'}>2D</MenuItem>
                            <MenuItem value={'3D'}>3D</MenuItem>
                            <MenuItem value={'4K'}>4K</MenuItem>
                            </Select>
                        </FormControl>
        </div>
            <Button 
                id='cancelAdd'
                onClick={()=>{setAddName(''); setDescEng(''); setDescArm('');setDescRus('');setDate(null);setStart(null);setEnd(null);setBookPriceEng('');setBookPriceArm('');setBookPriceRus('');setBuyPriceEng('');setBuyPriceArm('');setBuyPriceRus('');setType('');}} 
                color="primary"
                onMouseOver = {() => props.visualChange('cancelAdd','rgba(234, 65, 101)', 'rgba(246, 246, 246)')}
                onMouseOut = {() => props.visualChange('cancelAdd','white','rgba(234, 65, 101)')}
                style = {{cursor:'pointer', fontWeight:'bold', backgroundColor:'rgba(234, 65, 101)',color:'white', borderRadius:'8px', boxShadow:'0px 0px',position:'absolute',
                left:'54.5%',top:'120.5%'}}
            
                >
                Cancel
            </Button>
            <Button 
                id='add'
                disabled = {!addName || !descEng || !descArm || !descRus || !date || !start || !end || !bookPriceEng || !bookPriceArm || !bookPriceRus || !buyPriceEng || !buyPriceArm || !buyPriceRus || !type}
                onClick={handleAddFilm} 
                color="primary"
                onMouseOver = {() => props.visualChange('add','rgba(234, 65, 101)', 'rgba(246, 246, 246)')}
                onMouseOut = {() => props.visualChange('add','white','rgba(234, 65, 101)')}
                style = {{cursor:'pointer', fontWeight:'bold', backgroundColor:'rgba(234, 65, 101)',color:'white', borderRadius:'8px', boxShadow:'0px 0px',
                position:'absolute',
                left:'60%',top:'120.5%'}}
             >
                Add
            </Button>
        </>
    );
}

AddFilm.propTypes = {
    visualChange:PropTypes.func.isRequired,  
  };