import Header from './header';
import Footer from './footer';
import axios from 'axios';
import React, {useState,useEffect} from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { getDate } from 'date-fns';

function FilmPage(props){
    const [currentFilm, setCurrentFilm] = useState(
            [1,'Fast and Furious','https://i.pinimg.com/736x/8b/ba/74/8bba7470a3db15cff42caedf93d0118a.jpg','Fast and Furious is an american film with Vin Diesel anbhjjjbjhbbjbjbjbjbj  bjbjb  jb j bjh bjh bjhb Fast and Furious is an american film with Vin Diesel anbhjjjbjhbbjbjbjbjbj bjbjb jb j bjh bjh bjhb hj bjbhj jb j bj jjb j bj bjbj h bjb hjbj jj jhb b jbd Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wanhj bjbhj jb j bj jjb j bj bjbj h bjb hjbj jj jhb  b jbd Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Action', '2020-1-5','12:00 - 13:45','5$', '2011','United States','Paul Walker, Vin Diesel, Dwayne Johnson, Michelle Rodriguez, Jordana Brewster, Ludachris, Tyrese Gibson','James Wan'],
        )
    const [filmRequests, setFilmRequests] = useState(
        [
            [1,'Fast and Furious','https://i.pinimg.com/736x/8b/ba/74/8bba7470a3db15cff42caedf93d0118a.jpg','Fast and Furious is an american film with Vin Diesel and Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Action', '2020-1-5','12:00 - 13:45','5$','2D'],
            [2,'Fast and Furious','https://i.pinimg.com/736x/8b/ba/74/8bba7470a3db15cff42caedf93d0118a.jpg','Fast and Furious is an american film with Vin Diesel and Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Action', '2020-1-7','14:00 - 15:45','5$','4K'],
            [3,'New ','https://i.pinimg.com/736x/8b/ba/74/8bba7470a3db15cff42caedf93d0118a.jpg','Fast and Furious is an american film with Vin Diesel and Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Action', '2020-1-10','16:00 - 17:45','5$','2D'],
            [3,'New film','https://i.pinimg.com/736x/8b/ba/74/8bba7470a3db15cff42caedf93d0118a.jpg','Fast and Furious is an american film with Vin Diesel and Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Action', '2020-1-10','16:00 - 17:45','5$','3D'],
            [3,'New film','https://i.pinimg.com/736x/8b/ba/74/8bba7470a3db15cff42caedf93d0118a.jpg','Fast and Furious is an american film with Vin Diesel and Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Action', '2020-1-10','16:00 - 17:45','5$','2D'],
            [3,'New film','https://i.pinimg.com/736x/8b/ba/74/8bba7470a3db15cff42caedf93d0118a.jpg','Fast and Furious is an american film with Vin Diesel and Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Action', '2020-1-10','16:00 - 17:45','5$','4K'],

        ]);
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const [currentUser, setCurrentUser] = useState([]);
    const replaceHistory = (newAddress) => {
        props.history.replace(newAddress);
    }
    useEffect(() => {
        if(localStorage.getItem('username')){
            updateUsers();
        }
        document.title = 'Thank you!';
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
    const logOut = () => {
        localStorage.removeItem('username');
        props.history.replace('/main');
    }
    const decodeDate = (stringDate, getAttr) => {
        let year = stringDate.slice(0,4), month, day;
        stringDate = stringDate.slice(5,stringDate.length);
        if(stringDate.indexOf('-') === 1){
            month = stringDate[0];
            stringDate = stringDate.slice(2,stringDate.length);
        }else{
            month = stringDate.slice(0,2);
            stringDate = stringDate.slice(3,stringDate.length);
        }
        day = stringDate;
        if(getAttr === 'Year'){
            return year;
        }else if(getAttr === 'Month'){
            return month;
        }else{
            return day;
        }
    }
    window.scrollTo( 500, 0 );
    return (
        <>
            <Header 
                logout = {logOut} 
                replaceHistory = {replaceHistory} 
                currentUser = {currentUser}
            />
            <div style = {{marginTop:'4%', paddingBottom:'50%'}}>
                <div style = {{marginLeft:'12.6%', fontSize:'220%', fontWeight:'bold', color:'rgb(234, 65, 101)', fontFamily:'Arial'}}>
                    {'Fast and Furious' + ' (Action)'}
                </div>
                <div style = {{position:'absolute', marginLeft:'12.8%', marginTop:'4%'}}>
                    <img 
                        src = {currentFilm[2]}
                        width = '45%'
                    />
                </div>
                <div style = {{position:'absolute', marginLeft:'40%', marginTop:'6%', fontSize:'120%'}}>
                    <span style = {{fontWeight:'bold'}}>
                        {'Year: '}
                    </span>
                    <span>
                        {currentFilm[8]}
                    </span>
                    <br/>
                    <br/>
                    <span style = {{fontWeight:'bold'}}>
                        {'Country: '}
                    </span>
                    <span>
                        {currentFilm[9]}
                    </span>
                    <br/>
                    <br/>
                    <span style = {{fontWeight:'bold'}}>
                        {'Actors: '}
                    </span>
                    <span style = {{width:'1%'}}>
                        {currentFilm[10]}
                    </span>
                    <br/>
                    <br/>
                    <span style = {{fontWeight:'bold'}}>
                        {'Director: '}
                    </span>
                    <span>
                        {currentFilm[11]}
                    </span>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <div style = {{marginLeft:'40%', marginTop:'21%', fontSize:'120%', textAlign:'justify', width:'50%', lineHeight:'160%', position:'absolute'}}>
                <span style = {{fontWeight:'bold'}}>
                    {'Description: '}
                </span>
                    {currentFilm[3]}
                </div>
                <div style = {{position:'absolute', marginTop:'37%', marginLeft:'16.8%'}}>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography style = {{textAlign:'center', fontWeight:'bold'}} component="legend">
                            User ratings:
                        </Typography>
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly size = 'large'/>
                    </Box>
                </div>
            </div>
            <div style = {{textAlign:'center',color:'rgb(234, 65, 101)',fontSize:'190%',fontWeight:'bold', marginTop:'-5%'}}>
                Film Plan
            </div>
            <div style = {{marginTop:'2%'}}>
                <table style = {{textAlign:'center', width:'80%', marginLeft:'9.6%', borderCollapse:'collapse'}}>
                <tr style = {{color:'rgb(234, 65, 101)'}}>
                    <th style = {{padding:'2%'}}>
                        Name
                    </th>
                    <th style = {{padding:'2%'}}>
                        Genre
                    </th>
                    <th style = {{padding:'2%'}}>
                        Date
                    </th>
                    <th style = {{padding:'2%'}}>
                        Time
                    </th>
                    <th style = {{padding:'2%'}}>
                        Type
                    </th>
                    <th style = {{padding:'2%'}}>
                        Value
                    </th>
                </tr>
                    {
                        filmRequests.map((film,index) => (
                            <tr
                                style = {index % 2 === 0 ? {backgroundColor:'#f8f8f8'} : {}}
                                key = {index}
                            >
                                <td style = {{padding:'2%'}}>
                                    {film[1]}
                                </td>
                                <td style = {{padding:'2%'}}>
                                    {film[4]}
                                </td>
                                <td style = {{padding:'2%'}}>
                                    {decodeDate(film[5],'Day') + " " + months[decodeDate(film[5],'Month')] + ', ' + decodeDate(film[5],'Year')}
                                </td>
                                <td style = {{padding:'2%'}}>
                                    {film[6]}
                                </td>
                                <td style = {{padding:'2%'}}>
                                    {film[8]}
                                </td>
                                <td style = {{padding:'2%'}}>
                                    {film[7]}
                                </td>
                            </tr>
                        ))
                    }
                </table>
            </div>
            <Footer/>
        </>
    );
}

export default FilmPage;