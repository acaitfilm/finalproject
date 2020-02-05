import React, {useState, useEffect} from 'react';
import './styles.css';
import 'date-fns';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from './header';
import Footer from './footer';
import Film from './filmBlockMaker';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function Main(props){
    const [currentUser, setCurrentUser] = useState([]);
    const [currentFilms, setCurrentFilms] = useState(
        [
            [1,'Fast and Furious','https://i.pinimg.com/736x/8b/ba/74/8bba7470a3db15cff42caedf93d0118a.jpg','Fast and Furious is an american film with Vin Diesel and Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Action', '2020-1-5','12:00 - 13:45','5$'],
            [2,'Fast and Furious','https://i.pinimg.com/736x/8b/ba/74/8bba7470a3db15cff42caedf93d0118a.jpg','Fast and Furious is an american film with Vin Diesel and Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Action', '2020-1-7','14:00 - 15:45','5$'],
            [3,'New film','https://i.pinimg.com/736x/8b/ba/74/8bba7470a3db15cff42caedf93d0118a.jpg','Fast and Furious is an american film with Vin Diesel and Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Action', '2020-1-10','16:00 - 17:45','5$'],
            [3,'New film','https://i.pinimg.com/736x/8b/ba/74/8bba7470a3db15cff42caedf93d0118a.jpg','Fast and Furious is an american film with Vin Diesel and Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Action', '2020-1-10','16:00 - 17:45','5$'],
            [3,'New film','https://i.pinimg.com/736x/8b/ba/74/8bba7470a3db15cff42caedf93d0118a.jpg','Fast and Furious is an american film with Vin Diesel and Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Action', '2020-1-10','16:00 - 17:45','5$'],
            [3,'New film','https://i.pinimg.com/736x/8b/ba/74/8bba7470a3db15cff42caedf93d0118a.jpg','Fast and Furious is an american film with Vin Diesel and Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Action', '2020-1-10','16:00 - 17:45','5$'],

        ]);
    const [date, setDate] = useState();
    const [genrePicked, setGenrePicked] = useState('All');
    const [datePicked, setDatePicked] = useState('Today');
    useEffect(() => {
        setDate(getDate(0));
        updateFilms();
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
            const url = `http://127.0.0.1/index.php`;
            axios.post(url,formData)
                .then(
                function(res){
                    let arrOfUsers = [];
                    while(res.data.length){
                        arrOfUsers.push(res.data.splice(0,9));
                    }
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
        formData.append("filmsGet", 1);
            const url = `http://127.0.0.1/index.php`;
            axios.post(url,formData)
                .then(
                function(res){
                    let arrOfFilms = [];
                    while(res.data.length){
                        arrOfFilms.push(res.data.splice(0,9));
                    }
                    //setCurrentFilms(arrOfFilms);
                }
                )
                .catch(err => console.log(err));
    }
    const getDate = (adder) => {
        let date = new Date();
        date.setDate(date.getDate() + adder);
        let dateString = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
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
        }else if(event.target.value === 'After2Days'){
            setDate(getDate(2));
        }else if(event.target.value === 'After3Days'){
            setDate(getDate(3));
        }else if(event.target.value === 'After4Days'){
            setDate(getDate(4));
        }else if(event.target.value === 'After5Days'){
            setDate(getDate(5));
        }else if(event.target.value === 'After6Days'){
            setDate(getDate(6));
        }else{
            setDate(getDate(7));
        }
    }
    document.title = 'Choose your film to watch';
    document.body.style.backgroundImage='';
    console.log(date);
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
            <div style = {{marginTop:'3%', display:'inline-block', marginLeft:'10%'}}>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={genrePicked}
                onChange={(event) => changeGenre(event)}
                color='secondary'
            >
                <MenuItem value={'All'}>All</MenuItem>
                <MenuItem value={'Action'}>Action</MenuItem>
                <MenuItem value={'Adventure'}>Adventure</MenuItem>
                <MenuItem value={'Biography'}>Biography</MenuItem>
                <MenuItem value={'Comedy'}>Comedy</MenuItem>
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
            </div>
            <div>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={datePicked}
                onChange={(event) => updatePickedDate(event)}
                color='secondary'
            >
                <MenuItem value={'Today'}>Today</MenuItem>
                <MenuItem value={'Tomorrow'}>Tomorrow</MenuItem>
                <MenuItem value={'After2Days'}>After 2 Days</MenuItem>
                <MenuItem value={'After3Days'}>After 3 Days</MenuItem>
                <MenuItem value={'After4Days'}>After 4 Days</MenuItem>
                <MenuItem value={'After5Days'}>After 5 Days</MenuItem>
                <MenuItem value={'After6Days'}>After 6 Days</MenuItem>
                <MenuItem value={'NextWeek'}>Next Week</MenuItem>
            </Select>
            </div>
            {
                currentFilms.map((film,index) => (
                    film[5] === date ? 
                    <Film
                        key = {index}
                        props = {props}
                        name = {film[1]}
                        image = {film[2]}
                        description = {film[3]}
                        genre = {film[4]}
                        //date = {film[5]}
                        hours = {film[6]}
                    /> : false
                ))
            }
            <Footer/>
        </>
    );
}

export default Main;