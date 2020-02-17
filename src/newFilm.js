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
    const [filmsEng,setFilmsEng] = useState([]);
    const [filmsArm,setFilmsArm] = useState([]);
    const [filmsRus,setFilmsRus] = useState([]);

    const y = (new Date()).getFullYear();
    const years = Array.from(new Array(20),(val, index) => y-index);

    
    useEffect(()=>{
        getNewFilms();
    },[]);

     const getNewFilms= () =>{
        let formData = new FormData();
        formData.append("filmsGet", 1);
            const url = `http://localhost/index.php`;
            axios.post(url,formData)
                .then(
                function(res){
                    let arrEng = [];
                    let arrArm = [];
                    let arrRus = [];
                    while(res.data[0].length){
                        arrEng.push(res.data[0].splice(0,9));
                    }
                    while(res.data[1].length){
                        arrArm.push(res.data[1].splice(0,9));
                    }
                    while(res.data[2].length){
                        arrRus.push(res.data[2].splice(0,9));
                    }
                    setFilmsEng(arrEng);   
                    setFilmsArm(arrArm);   
                    setFilmsRus(arrRus);  
                }
                )
                .catch(err => console.log(err));
        
    }
    //console.log(filmsEng); 
    //console.log(filmsArm); 
    //console.log(filmsRus); 
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
    const genreEngValidation=(event)=>{
        setGenreEng(event.target.value);
    }
    const genreArmValidation=(event)=>{
        setGenreArm(event.target.value);
    }
    const genreRusValidation=(event)=>{
        setGenreRus(event.target.value);
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
            let errorCheck = false;
            //stuguma ka tenc anunov film arden bazayum, te che
            let hasFilm1 = false;
            let hasFilm2 = false;
            let hasFilm3 = false;
            filmsEng.map((arr) => {
                if(arr[1] === nameEng){
                    hasFilm1 = true;
                   
                }
                return true;
            
            });
            filmsArm.map((arr) => {
                if(arr[1] === nameArm){
                    hasFilm2 = true;
                    
               }
                return true;
            
            });
            filmsRus.map((arr) => {
                if(arr[1] === nameRus){
                    hasFilm3 = true;
                
                }
                return true;
            
            });
            if(hasFilm1 || hasFilm2 || hasFilm3){
                errorCheck = true;
                error.nameEng = 'Film  already exists.';
                error.nameArm = 'Ֆիլմն արդեն գոյություն ունի:';
                error.nameRus = 'Фильм уже существует.';
            }else{
                error.nameEng = '';
                error.nameArm = '';
                error.nameRus = '';
            }
    
            if(!errorCheck){
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
                
                //mtacum em load ic heto kareliya inch vor success i het kapvac ban cuyc tal animaciayov mi erku vayrkyan gri kam image

                setNameEng(''); setNameArm(''); setNameRus(''); setLink('');setDescEng('');setDescArm('');setDescRus('');setGenreEng('');setGenreArm('');setGenreRus('');setYear('');setCountryEng('');setCountryArm('');setCountryRus('');setActorsEng('');setActorsArm('');setActorsRus('');setProducerEng('');setProducerArm('');setProducerRus('');
            }
         

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
                        <InputLabel id="demo-controlled-open-select-label"
                            style={{marginLeft:'15px',marginTop:'15px'}}
                        >
                            {language==='English'?'Genre':language==='Armenian'?'Ժանր':'Жанр'}
                        </InputLabel>
                        <Select
                            style={{marginTop:'15px',marginLeft:'15px',width:'200px'}}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={language ==='English'?genreEng:language ==='Armenian'? genreArm : genreRus}
                            onChange={language ==='English'?genreEngValidation:language ==='Armenian'? genreArmValidation : genreRusValidation}
                            color='secondary'
                        >
                            <MenuItem value={language === 'English'?'Action':language ==='Armenian'?'Էքշն':'Боевик'}>{language ==='English'?'Action':language === 'Armenian'?'Էքշն':'Боевик'}</MenuItem>
                            <MenuItem value={language === 'English'?'Adventure':language ==='Armenian'?'Արկածային':'Приключение'}>{language ==='English'?'Adventure':language === 'Armenian'?'Արկածային':'Приключение'}</MenuItem>
                            <MenuItem value={language === 'English'?'Biography':language ==='Armenian'?'Կենսագրական':'Биография'}>{language ==='English'?'Biography':language === 'Armenian'?'Կենսագրական':'Биография'}</MenuItem>
                            <MenuItem value={language === 'English'?'Comedy':language ==='Armenian'?'Կատակերգություն':'Комедия'}>{language ==='English'?'Comedy':language === 'Armenian'?'Կատակերգություն':'Комедия'}</MenuItem>
                            <MenuItem value={language === 'English'?'Criminal':language ==='Armenian'?'Կրիմինալ':'Криминальный'}>{language ==='English'?'Criminal':language === 'Armenian'?'Կրիմինալ':'Криминальный'}</MenuItem>
                            <MenuItem value={language === 'English'?'Drama':language ==='Armenian'?'Դրամա':'Драма'}>{language==='English'?'Drama':language === 'Armenian'?'Դրամա':'Драма'}</MenuItem>
                            <MenuItem value={language === 'English'?'Family':language ==='Armenian'?'Ընտանեկան':'Семейный'}>{language ==='English'?'Family':language === 'Armenian'?'Ընտանեկան':'Семейный'}</MenuItem>
                            <MenuItem value={language === 'English'?'Fantasy':language ==='Armenian'?'Ֆանտաստիկա':'Фантастика'}>{language ==='English'?'Fantasy':language === 'Armenian'?'Ֆանտաստիկա':'Фантастика'}</MenuItem>
                            <MenuItem value={language === 'English'?'History':language ==='Armenian'?'Պատմական':'Исторический'}>{language ==='English'?'History':language === 'Armenian'?'Պատմական':'Исторический'}</MenuItem>
                            <MenuItem value={language === 'English'?'Horror':language ==='Armenian'?'Սարսափ':'Фильм ужасов'}>{language ==='English'?'Horror':language === 'Armenian'?'Սարսափ':'Фильм ужасов'}</MenuItem>
                            <MenuItem value={language === 'English'?'Musical':language ==='Armenian'?'Երաժշտական':'Mузыкальный'}>{language ==='English'?'Musical':language === 'Armenian'?'Երաժշտական':'Mузыкальный'}</MenuItem>
                            <MenuItem value={language === 'English'?'Mystery':language ==='Armenian'?'Առեղծվածային':'Mистический'}>{language ==='English'?'Mystery':language === 'Armenian'?'Առեղծվածային':'Mистический'}</MenuItem>
                            <MenuItem value={language === 'English'?'Sport':language ==='Armenian'?'Սպորտային':'Спортивный'}>{language ==='English'?'Sport':language === 'Armenian'?'Սպորտային':'Спортивный'}</MenuItem>
                            <MenuItem value={language === 'English'?'Thriller':language ==='Armenian'?'Թրիլլեր':'Триллер'}>{language ==='English'?'Thriller':language === 'Armenian'?'Թրիլլեր':'Триллер'}</MenuItem>
                            <MenuItem value={language === 'English'?'Sci-Fi':language ==='Armenian'?'Գիտաֆանտաստիկա':'Научная фантастика'}>{language ==='English'?'Sci-Fi':language === 'Armenian'?'Գիտաֆանտաստիկա':'Научная фантастика'}</MenuItem>
                            <MenuItem value={language === 'English'?'Western':language ==='Armenian'?'Վեստերն':'Вестерн'}>{language ==='English'?'Western':language==='Armenian'?'Վեստերն':'Вестерн'}</MenuItem>
                        </Select>
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
            
            onClick={()=>{ setNameEng(''); setNameArm(''); setNameRus(''); setLink('');setDescEng('');setDescArm('');setDescRus('');setGenreEng('');setGenreArm('');setGenreRus('');setYear('');setCountryEng('');setCountryArm('');setCountryRus('');setActorsEng('');setActorsArm('');setActorsRus('');setProducerEng('');setProducerArm('');setProducerRus('');error.nameEng='';error.nameArm='';error.nameRus='';}} 
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