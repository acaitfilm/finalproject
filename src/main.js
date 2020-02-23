import React, {useState, useEffect} from 'react';
import './styles.css';
import 'date-fns';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import Header from './header';
import Footer from './footer';
import Film from './filmBlockMaker';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function Main(props){
    const [currentUser, setCurrentUser] = useState([]);
    const [currentFilms, setCurrentFilms] = useState([]
        /*[
            [1,'Fast and Furious 4','https://i.pinimg.com/736x/8b/ba/74/8bba7470a3db15cff42caedf93d0118a.jpg','Fast and Furious is an american film with Vin Diesel and Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Action', '2020-1-10','12:00 - 13:45','5$','2D'],
            [2,'Insidious 3','https://m.media-amazon.com/images/M/MV5BMTUwNDU4NjE1N15BMl5BanBnXkFtZTgwOTc0MzA5NDE@._V1_.jpg','Fast and Furious is an american film with Vin Diesel and Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Horror', '2020-1-10','14:00 - 15:45','5$','4K'],
            [3,'Nemo','https://greekcity.com/wp-content/uploads/2016/10/Finding-Nemo-dvd-e1481580817586.jpeg','Fast and Furious is an american film with Vin Diesel and Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Adventure', '2020-1-10','16:00 - 17:45','5$','2D'],
            [4,'Running scared','https://m.media-amazon.com/images/M/MV5BMTIwOTAzMDc4MF5BMl5BanBnXkFtZTcwNjY5MzIzMQ@@._V1_.jpg','Fast and Furious is an american film with Vin Diesel and Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Criminal', '2020-1-10','16:00 - 17:45','5$','3D'],
            [5,'Everest','https://ic.pics.livejournal.com/olgamitireva/76910304/17591/17591_900.png','Fast and Furious is an american film with Vin Diesel and Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Science', '2020-1-10','16:00 - 17:45','5$','2D'],
            [6,'Brick mansions','https://occ-0-1001-999.1.nflxso.net/art/72f57/b31c8a08bec49318f14e53cb78db72a7f2872f57.jpg','Fast and Furious is an american film with Vin Diesel and Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Criminal', '2020-1-10','16:00 - 17:45','5$','4K'],

        ]
        */);
    const [eng, setEng] = useState([]);
    const [arm, setArm] = useState([]);
    const [rus, setRus] = useState([]);
    const [date, setDate] = useState();
    const [genrePicked, setGenrePicked] = useState('Genre');
    const [datePicked, setDatePicked] = useState('Today');
    const [users, setUsers] =useState([]);
    useEffect(() => {
        setDate(getDate(0));
        updateFilms();
        getFilms();
        if(localStorage.getItem('username')){
            updateUsers();
        }
        if(!localStorage.getItem('theme')){
            localStorage.setItem('theme','lightMode');
        }
        document.title = 'Sign Up now!';
    },[]);
    const updateUsers = () => {
        let formData = new FormData();
        formData.append("userGet", 1);
            const url = `http://localhost/index.php`;
            axios.post(url,formData)
                .then(
                function(res){
                    let arrOfUsers = [];
                    while(res.data.length){
                        arrOfUsers.push(res.data.splice(0,9));
                    }
                    setUsers(arrOfUsers);
                    arrOfUsers.map(array => {
                        if(array[3] === localStorage.getItem('username')){
                            setCurrentUser(array);
                            
                        }
                        return true;
                    });
                }
                )
                .catch(err => console.log(err));
    }
    
    const updateFilms = () => {
        let formData = new FormData();
        formData.append("sessionsGet", 1);
            const url = `http://localhost/index.php`;
            axios.post(url,formData)
                .then(
                function(res){
                    let arrOfFilms = [];
                    while(res.data.length){
                        arrOfFilms.push(res.data.splice(0,9));
                    }
                    console.log(arrOfFilms);
                    setCurrentFilms(arrOfFilms);
                }
                )
                .catch(err => console.log(err));
    }
    const getFilms = () => {
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
                    setEng(arrEng); 
                    setArm(arrArm);   
                    setRus(arrRus); 
                }
                )
                .catch(err => console.log(err));
    }
    
    console.log(currentFilms);
    console.log(eng);
    console.log(arm);
    console.log(rus);
    const getDate = (adder) => {
        let date = new Date();
        date.setDate(date.getDate() + adder);
        let dateString = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
        return dateString;
    }
    const logOut = () => {
        localStorage.removeItem('username');
        props.history.replace('/main');
    }
    const replaceHistory = (newAddress) => {
        props.history.replace(newAddress);
    }
    const changeGenre = (event) => {
        setGenrePicked(event.target.value);
    }
    const updatePickedDate = (event) => {
        setDatePicked(event.target.value);
        if(event.target.value === 'Today'){
            setDate(getDate(0));
        }else if(event.target.value === 'Tomorrow'){
            setDate(getDate(1));
        }else if(event.target.value === 'After 2 Days'){
            setDate(getDate(2));
        }else if(event.target.value === 'After 3 Days'){
            setDate(getDate(3));
        }else if(event.target.value === 'After 4 Days'){
            setDate(getDate(4));
        }else if(event.target.value === 'After 5 Days'){
            setDate(getDate(5));
        }else if(event.target.value === 'After 6 Days'){
            setDate(getDate(6));
        }else{
            setDate(getDate(7));
        }
    }
    const createFilmBlock = (film,index) => {
        let filmUrl;
        for(let index = 0; index < eng.length; index++){
            if(film[0]===eng[index][1]) 
                filmUrl =  eng[index][2]
        };
        nothingFound = false;
        return (
            <Film
                key = {index}
                props = {props}
                name = {film[0]}
                image = {filmUrl}
                description = {film[1]}
                genre = {eng.map(arr=>(film[0]===arr[1]?arr[4]:false))}
                date = {film[2]}
                hours = {film[3]+' - '+film[4]}
                type = {film[8]}
                cost = {film[5]}
            />
        );
    }
    document.title = 'Choose your film to watch';
    document.body.style.backgroundImage='';
    let nothingFound = true;
    return(
        <>
            <Header 
                logout = {logOut} 
                replaceHistory = {replaceHistory} 
                currentUser = {currentUser}
            />
            <div style = {{backgroundColor:'rgba(234, 65, 101)', cursor:'pointer'}}>
                <div className = 'firstPic'></div>
                <div className = 'secondPic'></div>
                <div className = 'thirdPic'></div>
                <div className = 'fourthPic'></div>
                <div className = 'fifthPic'></div>
            </div>
            <div>
                {/* date */}
            </div>
            <div style = {{fontWeight:'bold', fontSize:'290%',textAlign:'center', marginTop:'4%', paddingBottom:'4%'}}>
                {datePicked}
            </div>
            <Select
                style = {{marginLeft:'30%',marginTop:'-2.7%', fontSize:'130%'}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={genrePicked}
                onChange={(event) => changeGenre(event)}
                color='secondary'
            >
                <MenuItem value={'Genre'}>Genre</MenuItem>
                <MenuItem value={'Action'}>Action</MenuItem>
                <MenuItem value={'Adventure'}>Adventure</MenuItem>
                <MenuItem value={'Biography'}>Biography</MenuItem>
                <MenuItem value={'Comedy'}>Comedy</MenuItem>
                <MenuItem value={'Criminal'}>Criminal</MenuItem>
                <MenuItem value={'Drama'}>Drama</MenuItem>
                <MenuItem value={'Family'}>Family</MenuItem>
                <MenuItem value={'Fantasy'}>Fantasy</MenuItem>
                <MenuItem value={'History'}>History</MenuItem>
                <MenuItem value={'Horror'}>Horror</MenuItem>
                <MenuItem value={'Musical'}>Musical</MenuItem>
                <MenuItem value={'Mystery'}>Mystery</MenuItem>
                <MenuItem value={'Sport'}>Sport</MenuItem>
                <MenuItem value={'Thriller'}>Thriller</MenuItem>
                <MenuItem value={'Sci-Fi'}>Sci-Fi</MenuItem>
                <MenuItem value={'Western'}>Western</MenuItem>
            </Select>
                <Select
                    style = {{marginLeft:'29.7%', fontSize:'130%'}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={datePicked}
                    onChange={(event) => updatePickedDate(event)}
                    color='secondary'
                >
                    <MenuItem value={'Today'}>Today</MenuItem>
                    <MenuItem value={'Tomorrow'}>Tomorrow</MenuItem>
                    <MenuItem value={'After 2 Days'}>After 2 Days</MenuItem>
                    <MenuItem value={'After 3 Days'}>After 3 Days</MenuItem>
                    <MenuItem value={'After 4 Days'}>After 4 Days</MenuItem>
                    <MenuItem value={'After 5 Days'}>After 5 Days</MenuItem>
                    <MenuItem value={'After 6 Days'}>After 6 Days</MenuItem>
                    <MenuItem value={'Next Week'}>Next Week</MenuItem>
                </Select>
            {   
                    
                    
                currentFilms.map((film,index) => (
                    film[2] === date //&& (genrePicked === 'Genre' || film[4] === genrePicked)
                     ? 
                    createFilmBlock(film,index)
                   
                     : false
               ))
            }
            {
                nothingFound ? <div style = {{textAlign:'center', marginTop:'6%',fontWeight:'bold',fontSize:'180%', paddingBottom:'8%'}}>
                    Nothing found
                </div> : false
            }
            <Footer paddingBottomNoNeed = {true}/>
        </>
    );
}

export default Main;