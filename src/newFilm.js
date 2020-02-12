import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import PropTypes from "prop-types";
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import MuiPhoneNumber from "material-ui-phone-number";
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function NewFilm(props){
  
    const [nameEng,setNameEng] = useState('');
    const [nameArm,setNameArm] = useState('');
    const [nameRus,setNameRus] = useState('');
    const [link,setLink] = useState('');
    const [descEng,setDescEng] = useState('');
    const [descArm,setDescArm] = useState('');
    const [descRus,setDescRus] = useState('');
    const [genreEng,setGenreEng] = useState('');
    const [genreArm,setGenreArm] = useState('');
    const [genreRus,setGenreRus] = useState('');
    const [year,setYear] = useState('');
    const [open,setOpen] = useState(false);
    const [countryEng,setCountryEng] = useState('');
    const [countryArm,setCountryArm] = useState('');
    const [countryRus,setCountryRus] = useState('');
    const [actorsEng,setActorsEng] = useState('');
    const [actorsArm,setActorsArm] = useState('');
    const [actorsRus,setActorsRus] = useState('');
    const [producerEng,setProducerEng] = useState('');
    const [producerArm,setProducerArm] = useState('');
    const [producerRus,setProducerRus] = useState('');
    const [language,setLanguage] = useState('English');
    const [error, setError] = useState({});
    const [newFilms,setNewFilms] = useState([]);

    const y = (new Date()).getFullYear();
    const years = Array.from(new Array(20),(val, index) => y-index);
    console.log(typeof years[0]);
    
    /*useEffect(()=>{
        getNewFilms();
    },[])
     const getNewFilms= () =>{
        let formData = new FormData();
        formData.append("newFilmsGet", 1);
            const url = `http://localhost/index.php`;
            axios.post(url,formData)
                .then(
                function(res){
                    let arrFilms = [];
                    while(res.data.length){
                        arrFilms.push(res.data.splice(0,9));
                    }
                    setNewFilms(arrFilms);   
                }
                )
                .catch(err => console.log(err));
        
    }
    */
    const nameEngValidation=(event)=>{
        let value = event.target.value;
        if( (!/^[A-Za-z0-9 ]+$/.test(value) && value!=='') ||value.length>30){
            return;
        }
        
        let str = '';
        if(value.length){
            str = (value[0].toUpperCase() + value.slice(1))
        }
        setNameEng(str);
      }
      const nameArmValidation=(event)=>{
        let value = event.target.value;
        if(value.length>30){
            return;
        }
        
        let str = '';
        if(value.length){
            str = (value[0].toUpperCase() + value.slice(1))
        }
        setNameArm(str);
      }
      const nameRusValidation=(event)=>{
           let value = event.target.value;
        if((!/^[а-яА-ЯЁё0-9 ]+$/.test(value) && value !== '') || value.length>30){
            return;
        }
        
        let str = '';
        if(value.length){
            str = (value[0].toUpperCase() + value.slice(1))
        }
        setNameRus(str);
      }
      const descEngValidation =(event)=>{
          let value=event.target.value;
          if((!/^[A-Za-z0-9\._,\- ]+$/.test(value) && value!=='') ||value.length>300){
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
        if(value.length>300){
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
        if((!/^[а-яА-ЯЁё0-9,\—\.\«\»\- ]+$/.test(value) && value !== '') ||value.length>300){
            return;
        }
        let str = '';
        if(value.length){
          str = (value[0].toUpperCase() + value.slice(1))
      }
      setDescRus(str);

    }
    const genreEngValidation=(event)=>{
        let value = event.target.value;
        if( (!/^[A-Za-z, ]+$/.test(value) && value!=='') ||value.length>40){
            return;
        }
        
        let str = '';
        if(value.length){
            str = (value[0].toUpperCase() + value.slice(1))
        }
        setGenreEng(str);
    }
    const genreArmValidation=(event)=>{
        let value = event.target.value;
        if( value.length>40){
            return;
        }
        
        let str = '';
        if(value.length){
            str = (value[0].toUpperCase() + value.slice(1))
        }
        setGenreArm(str);
    }
    const genreRusValidation=(event)=>{
        let value = event.target.value;
        if( (!/^[а-яА-ЯЁё0-9,. ]+$/.test(value) && value!=='') ||value.length>40){
            return;
        }
        
        let str = '';
        if(value.length){
            str = (value[0].toUpperCase() + value.slice(1))
        }
        setGenreRus(str);
    }
    const countryEngValidation=(event)=>{
        let value = event.target.value;
        if( (!/^[A-Za-z.\- ]+$/.test(value) && value!=='')  ||value.length>20){
            return;
        }
        
        let str = '';
        if(value.length){
            str = (value[0].toUpperCase() + value.slice(1))
        }
        setCountryEng(str);
    }
    const countryArmValidation=(event)=>{
        let value = event.target.value;
        if(value.length>20){
            return;
        }
        
        let str = '';
        if(value.length){
            str = (value[0].toUpperCase() + value.slice(1))
        }
        setCountryArm(str);
    }
    const countryRusValidation=(event)=>{
        let value = event.target.value;
        if( (!/^[а-яА-ЯЁё0-9.\- ]+$/.test(value) && value!=='')  ||value.length>20){
            return;
        }
        
        let str = '';
        if(value.length){
            str = (value[0].toUpperCase() + value.slice(1))
        }
        setCountryRus(str);
    }
    const actorsEngValidation=(event)=>{
        let value = event.target.value;
        if( (!/^[A-Za-z,\- ]+$/.test(value) && value!=='')  ||value.length>50){
            return;
        }
        
        let str = '';
        if(value.length){
            str = (value[0].toUpperCase() + value.slice(1))
        }
        setActorsEng(str);
    }
    const actorsArmValidation=(event)=>{
        let value = event.target.value;
        if(value.length>50){
            return;
        }
        
        let str = '';
        if(value.length){
            str = (value[0].toUpperCase() + value.slice(1))
        }
        setActorsArm(str);
    }
    const actorsRusValidation=(event)=>{
        let value = event.target.value;
        if( (!/^[а-яА-ЯЁё0-9,\- ]+$/.test(value) && value!=='')  ||value.length>50){
            return;
        }
        
        let str = '';
        if(value.length){
            str = (value[0].toUpperCase() + value.slice(1))
        }
        setActorsRus(str);
    }
    const producerEngValidation=(event)=>{
        let value = event.target.value;
        if( (!/^[A-Za-z,\- ]+$/.test(value) && value!=='')  ||value.length>50){
            return;
        }
        
        let str = '';
        if(value.length){
            str = (value[0].toUpperCase() + value.slice(1))
        }
        setProducerEng(str);
    }
    const producerArmValidation=(event)=>{
        let value = event.target.value;
        if(value.length>50){
            return;
        }
        
        let str = '';
        if(value.length){
            str = (value[0].toUpperCase() + value.slice(1))
        }
        setProducerArm(str);
    }
    const producerRusValidation=(event)=>{
        let value = event.target.value;
        if( (!/^[а-яА-ЯЁё0-9,\- ]+$/.test(value) && value!=='')  ||value.length>50){
            return;
        }
        
        let str = '';
        if(value.length){
            str = (value[0].toUpperCase() + value.slice(1))
        }
        setProducerRus(str);
    }
    const linkValidation=(event)=>{
        let value = event.target.value;
        let symbols = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;
        if((!symbols.test(value) && value!=='') || value.length>100){
            return;
        }
        
        
        setLink(value);
    }
    const idGenerator = () => {
        localStorage.setItem('currentfilmId',+localStorage.getItem('currentfilmId') + 1);
        return localStorage.getItem('currentfilmId');
    }
      const handleLoadEnglish = ()=>{

        let id = localStorage.getItem('currentfilmId');
        
        let films = [
                [id,
                nameEng,
                link,
                descEng,
                genreEng,
                year,
                countryEng,
                actorsEng,
                producerEng],
                [   id,
                    nameArm,
                    link,
                    descArm,
                    genreArm,
                    year,
                    countryArm,
                    actorsArm,
                    producerArm],
                    [
                        id,
                        nameRus,
                        link,
                        descRus,
                        genreRus,
                        year,
                        countryRus,
                        actorsRus,
                        producerRus 
                    ]
        ];
        idGenerator();
        films = JSON.stringify(films);
            let formData = new FormData();
            formData.append("filmSet", films);
            const url = `http://localhost/index.php`;
            axios.post(url,formData)
                .then(
                function(res){
                    console.log('Success!');
                    console.log(res);
                }
                )
                .catch(err => console.log(err));
           
           
          /*
            let errorCheck =false;
            //validation...
            if(date.getMonth() <= new Date().getMonth()){
                error.date = 'You need to enter a movie date only a month later!';
                errorCheck = true;
            }
            else{
                error.date = '';
            }
            
            if(end[0] === 0 && start[0] === 0){
                if(end[1]-start[1]<=0){
                    error.start = 'Film start time must be earlier than end time!';
                    error.end = 'Film end time must be later than start time!'
                    errorCheck = true;
                }
                else{
                    error.start = '';
                    error.end = '';
                }
            }
            else
            if()
            */

      }
      const classes=styles();
      return(
        <>
        <div className={classes.importFilms}>
        <FormControl
            
                style={{marginLeft:'10%',marginTop:'4%',width:'140px',position:'absolute',backgroundColor:'#FFFAFA'}}
                            
        >
        <Select
            color='secondary'
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={language}
            variant='outlined'
            onChange={(event) =>setLanguage(event.target.value)}
            
        >
                        
            <MenuItem value={'English'}>English</MenuItem>
            <MenuItem value={'Armenian'}>Armenian</MenuItem>
            <MenuItem value={'Russian'}>Russian</MenuItem>
        </Select>
        </FormControl>
           
            <div className={classes.newFilmLanguagesDiv}>
                     
                    <TextField
                        
                        margin="dense"
                        id="name"
                        label={language === 'English'? 'Name': language === 'Armenian' ? "Անուն" : 'Имя'}
                        error = {language ==='English'?!!error.nameEng:language ==='Armenian'? !!error.nameArm : !!error.nameRus}
                        helperText={language ==='English'?error.nameEng:language ==='Armenian'? error.nameArm : error.nameRus}
                        value={language ==='English'?nameEng:language ==='Armenian'? nameArm : nameRus}
                        onChange={language ==='English'?nameEngValidation:language ==='Armenian'? nameArmValidation :nameRusValidation}
                        style={{marginTop:'2%',marginLeft:'15px',width:'200px'}}
                    />
                    {language==='English' &&
                        <TextField
                   
                        margin="dense"
                        id="link"
                        label="Image link"
                        error = {!!error.link}
                        //helperText={error.link}
                        value={link}
                        onChange={linkValidation}
                        style={{marginTop:'15px',marginLeft:'15px',width:'200px'}}
                        />
                    }
                    
                    <TextField
                        id="outlined-multiline"
                        label={language === 'English'? 'Description': language === 'Armenian' ?'Նկարագրություն':'Oписание'}
                        multiline
                        color='secondary'
                        variant="outlined"
                        rows="4"
                        error = {language ==='English'?!!error.descEng:language ==='Armenian'? !!error.descArm : !!error.descRus}
                        helperText={language ==='English'?error.descEng:language ==='Armenian'? error.descArm : error.descRus}
                        value={language ==='English'?descEng:language ==='Armenian'? descArm : descRus}
                        onChange={language ==='English'?descEngValidation:language ==='Armenian'? descArmValidation: descRusValidation}
                        style={{marginTop:'15px',marginLeft:'15px',width:'400px'}}
                        />
                            <TextField
                            margin="dense"
                            id="genre"
                            label={language === 'English'? 'Genre': language === 'Armenian' ? 'Ժանր':'Жанр'}
                            error = {language==='English'?!!error.genreEng:language==='Armenian'?!!error.genreArm:!!error.genreRus}
                            helperText={language==='English'?error.genreEng:language==='Armenian'?error.genreArm:error.genreRus}
                            value={language ==='English'?genreEng:language ==='Armenian'? genreArm : genreRus}
                            onChange={language ==='English'?genreEngValidation:language ==='Armenian'? genreArmValidation : genreRusValidation}
                            style={{marginTop:'15px',marginLeft:'15px',width:'200px'}}
                    />
                {language==='English' &&
                    <>
                    <InputLabel id="demo-controlled-open-select-label"
                        style={{marginLeft:'15px',marginTop:'15px'}}
                    >
                        Year of premiere
                    </InputLabel>
                        <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        color='secondary'
                        //error={!!error.year}
                        //helperText={error.year}
                        onClose={()=>setOpen(false)}
                        onOpen={()=>setOpen(true)}
                        value={year}
                        onChange={(event)=>setYear(event.target.value)}
                        style={{marginLeft:'15px',width:'200px'}}
                        >
                        <MenuItem value="">
                            <em> </em>
                        </MenuItem>
                        {
                                years.map((year, index) => {
                                return <MenuItem key={`year${index}`} value={year}>{year}</MenuItem>
                            })
                        }
                        </Select>
                        </>
                    }
                            <TextField
                            margin="dense"
                            id="country"
                            label={language ==='English'?'Country':language ==='Armenian'? 'Երկիր':'Страна'}
                            error = {language ==='English'?!!error.countryEng:language ==='Armenian'? !!error.countryArm : !!error.countryRus}
                            helperText={language ==='English'?error.countryEng:language ==='Armenian'? error.countryArm : error.countryRus}
                            value={language ==='English'?countryEng:language ==='Armenian'?countryArm : countryRus}
                            onChange={language ==='English'?countryEngValidation:language ==='Armenian'? countryArmValidation : countryRusValidation}
                            style={{marginTop:'15px',marginLeft:'15px',width:'200px'}}
                        />
                        <TextField
                            margin="dense"
                            id="actors"
                            label={language==='English'?'Actors':language==='Armenian'?"Դերասաններ":'Актеры'}
                            error = {language ==='English'?!!error.actorsEng:language ==='Armenian'? !!error.actorsArm : !!error.actorsRus}
                            helperText={language ==='English'?error.actorsEng:language ==='Armenian'? error.actorsArm : error.actorsRus}
                            value={language ==='English'?actorsEng:language ==='Armenian'?actorsArm : actorsRus}
                            onChange={language ==='English'?actorsEngValidation:language ==='Armenian'? actorsArmValidation : actorsRusValidation}
                            style={{marginTop:'15px',marginLeft:'15px',width:'200px'}}
                        />
                         <TextField
                            margin="dense"
                            id="producer"
                            label={language==='English'?'Producer':language==='Armenian'?'Ռեժիսոր':'Режиссер'}
                            error = {language ==='English'?!!error.producerEng:language ==='Armenian'? !!error.producerArm : !!error.producerRus}
                            helperText={language ==='English'?error.producerEng:language ==='Armenian'? error.producerArm : error.producerRus}
                            value={language ==='English'?producerEng:language ==='Armenian'?producerArm : producerRus}
                            onChange={language ==='English'?producerEngValidation:language ==='Armenian'? producerArmValidation : producerRusValidation}
                            style={{marginTop:'15px',marginLeft:'15px',width:'200px',marginBottom:'20px'}}
                        />
                           
                        
                  </div>
        </div>
        <Button 
            id='cancel'
            
            onClick={()=>{ setNameEng(''); setNameArm(''); setNameRus(''); setLink('');setDescEng('');setDescArm('');setDescRus('');setGenreEng('');setGenreArm('');setGenreRus('');setYear('');setCountryEng('');setCountryArm('');setCountryRus('');setActorsEng('');setActorsArm('');setActorsRus('');setProducerEng('');setProducerArm('');setProducerRus('')}} 
            color="primary"
            onMouseOver = {() => props.visualChange('cancel','rgba(234, 65, 101)', 'rgba(246, 246, 246)')}
            onMouseOut = {() => props.visualChange('cancel','white','rgba(234, 65, 101)')}
            style = {{cursor:'pointer', fontWeight:'bold', backgroundColor:'rgba(234, 65, 101)',color:'white', borderRadius:'8px', boxShadow:'0px 0px',position:'absolute',
            left:'58%',top:'98%'}}
           
            >
                Cancel
            </Button>
            <Button 
                id='load'
                disabled = {!nameEng || !nameArm || !nameRus || !link || !descEng || !descArm || !descRus || !genreEng || !genreArm || !genreRus || !year || !countryEng || !countryArm || !countryRus ||!actorsEng ||!actorsArm||!actorsRus||!producerEng||!producerRus||!producerArm}
                onClick={handleLoadEnglish} 
                color="primary"
                onMouseOver = {() => props.visualChange('load','rgba(234, 65, 101)', 'rgba(246, 246, 246)')}
                onMouseOut = {() => props.visualChange('load','white','rgba(234, 65, 101)')}
                style = {{cursor:'pointer', fontWeight:'bold', backgroundColor:'rgba(234, 65, 101)',color:'white', borderRadius:'8px', boxShadow:'0px 0px',
                position:'absolute',width:'84px',
                left:'63.5%',top:'98%'}}
             >
                Load 
            </Button>
    </>
    
      )
}

NewFilm.propTypes = {
    visualChange:PropTypes.func.isRequired,  
  };