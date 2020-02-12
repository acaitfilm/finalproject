import React, {useState,useEffect} from 'react';
import Header from './header';
import axios from 'axios';
import Footer from './footer';
import { Link }  from 'react-router-dom';
import {styles} from './styles';

function FilmSearch(props){
    const [currentUser, setCurrentUser] = useState([]);
    const [currentFilms, setCurrentFilms] = useState([
        [1,'Fast and Furious 1','https://i.pinimg.com/736x/8b/ba/74/8bba7470a3db15cff42caedf93d0118a.jpg','Fast and Furious is an american film with Vin Diesel anbhjjjbjhbbjbjbjbjbj  bjbjb  jb j bjh bjh bjhb Fast and Furious is an american film with Vin Diesel anbhjjjbjhbbjbjbjbjbj bjbjb jb j bjh bjh bjhb hj bjbhj jb j bj jjb j bj bjbj h bjb hjbj jj jhb b jbd Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wanhj bjbhj jb j bj jjb j bj bjbj h bjb hjbj jj jhb  b jbd Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Action', '2020-1-5','12:00 - 13:45','5$', '2011','United States','Paul Walker, Vin Diesel, Dwayne Johnson, Michelle Rodriguez, Jordana Brewster, Ludachris, Tyrese Gibson','James Wan'],
        [1,'Fast and Furious 2','https://i.pinimg.com/736x/8b/ba/74/8bba7470a3db15cff42caedf93d0118a.jpg','Fast and Furious is an american film with Vin Diesel anbhjjjbjhbbjbjbjbjbj  bjbjb  jb j bjh bjh bjhb Fast and Furious is an american film with Vin Diesel anbhjjjbjhbbjbjbjbjbj bjbjb jb j bjh bjh bjhb hj bjbhj jb j bj jjb j bj bjbj h bjb hjbj jj jhb b jbd Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wanhj bjbhj jb j bj jjb j bj bjbj h bjb hjbj jj jhb  b jbd Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Action', '2020-1-5','12:00 - 13:45','5$', '2011','United States','Paul Walker, Vin Diesel, Dwayne Johnson, Michelle Rodriguez, Jordana Brewster, Ludachris, Tyrese Gibson','James Wan'],
        [1,'Fast and Furious 3','https://i.pinimg.com/736x/8b/ba/74/8bba7470a3db15cff42caedf93d0118a.jpg','Fast and Furious is an american film with Vin Diesel anbhjjjbjhbbjbjbjbjbj  bjbjb  jb j bjh bjh bjhb Fast and Furious is an american film with Vin Diesel anbhjjjbjhbbjbjbjbjbj bjbjb jb j bjh bjh bjhb hj bjbhj jb j bj jjb j bj bjbj h bjb hjbj jj jhb b jbd Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wanhj bjbhj jb j bj jjb j bj bjbj h bjb hjbj jj jhb  b jbd Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Action', '2020-1-5','12:00 - 13:45','5$', '2011','United States','Paul Walker, Vin Diesel, Dwayne Johnson, Michelle Rodriguez, Jordana Brewster, Ludachris, Tyrese Gibson','James Wan'],
        [1,'Fast and Furious 4','https://i.pinimg.com/736x/8b/ba/74/8bba7470a3db15cff42caedf93d0118a.jpg','Fast and Furious is an american film with Vin Diesel anbhjjjbjhbbjbjbjbjbj  bjbjb  jb j bjh bjh bjhb Fast and Furious is an american film with Vin Diesel anbhjjjbjhbbjbjbjbjbj bjbjb jb j bjh bjh bjhb hj bjbhj jb j bj jjb j bj bjbj h bjb hjbj jj jhb b jbd Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wanhj bjbhj jb j bj jjb j bj bjbj h bjb hjbj jj jhb  b jbd Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Action', '2020-1-5','12:00 - 13:45','5$', '2011','United States','Paul Walker, Vin Diesel, Dwayne Johnson, Michelle Rodriguez, Jordana Brewster, Ludachris, Tyrese Gibson','James Wan'],
        [1,'Fast and Furious 5','https://i.pinimg.com/736x/8b/ba/74/8bba7470a3db15cff42caedf93d0118a.jpg','Fast and Furious is an american film with Vin Diesel anbhjjjbjhbbjbjbjbjbj  bjbjb  jb j bjh bjh bjhb Fast and Furious is an american film with Vin Diesel anbhjjjbjhbbjbjbjbjbj bjbjb jb j bjh bjh bjhb hj bjbhj jb j bj jjb j bj bjbj h bjb hjbj jj jhb b jbd Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wanhj bjbhj jb j bj jjb j bj bjbj h bjb hjbj jj jhb  b jbd Paul Walker. One of the best movies that has ever been produced by original films. Produced by James Wan.', 'Action', '2020-1-5','12:00 - 13:45','5$', '2011','United States','Paul Walker, Vin Diesel, Dwayne Johnson, Michelle Rodriguez, Jordana Brewster, Ludachris, Tyrese Gibson','James Wan'],
    ]);
    const replaceHistory = (newAddress) => {
        props.history.replace(newAddress);
    }
    const searchValue = localStorage.getItem('searchValue');
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
    const changeBlockStyle = (id, bgColor, color) => {
        if(id === 'More Films' && color !== 'white'){
            color = 'rgba(234, 65, 101)';
        }
        document.getElementById(id).style.backgroundColor = bgColor;
        document.getElementById(id).style.color = color;
    }
    //setInterval(updateFilms, 15000);
    const openFilmPage = (id, filmName) => {
        localStorage.setItem('film',filmName);
        props.replaceHistory('/filmpage');
    }
    const logOut = () => {
        localStorage.removeItem('username');
        props.history.replace('/main');
    }
    let filmsCount = 0;
    window.scrollTo( 500, 0 );
    console.log(searchValue);
    const createFilmBlock = (filmName, imgSrc, filmGenre, filmDate, filmCountry, count, id) => {
        return <>
            <div 
                key = {count}
                id = {filmName}
                onMouseOver = {() => changeBlockStyle(filmName, 'rgb(234, 65, 101)', 'white')}
                onMouseOut = {() => changeBlockStyle(filmName, count % 2 === 0 ? 'rgb(241, 241, 241)' : 'rgb(246, 246, 246)', 'black')}
                style = {filmsCount % 2 === 0 ? {backgroundColor:'rgba(241, 241, 241)', padding:'1% 4% 4% 4%', cursor:'pointer'} : {backgroundColor:'rgba(246, 246, 246)', padding:'1% 4% 4% 4%', cursor:'pointer'}}
                onClick = {() => props.history.replace('/filmpage')}
            >
                <ul style = {{listStyleType:'none', fontSize:'130%', marginLeft:'4%', fontWeight:'bold'}}
                >
                    <li style = {{float:'left', width:'10%', marginTop:'-2.17%'}}>
                        <img src = {imgSrc} width = '43%'/>
                    </li>
                    <li style = {{float:'left', width:'30%'}}>
                        {filmName}
                    </li>
                    <li style = {{float:'left', width:'20%'}}>
                        {filmGenre}
                    </li>
                    <li style = {{float:'left', width:'20%'}}>
                        {filmDate}
                    </li>
                    <li style = {{float:'left', width:'20%'}}>
                        {filmCountry}
                    </li>
                </ul>
            </div>
        </>
    }
    const nothingFound = () => {
        return <>
            <div style = {{marginTop:'1%',backgroundColor:'rgba(246, 246, 246)', padding:'1% 4% 4% 4%', cursor:'pointer', textAlign:'center',fontWeight:'bold',fontSize:'140%'}}>
                Nothing Found
            </div>
        </>
    }
    let checkFilms = 0;
    return (
        <>
            <Header 
                logout = {logOut} 
                replaceHistory = {replaceHistory} 
                currentUser = {currentUser}
            />
               <div style = {{marginTop:'-1%',backgroundColor:'rgba(246, 246, 246)', padding:'2% 0% 3% 0%', cursor:'pointer',fontWeight:'bold',fontSize:'140%', textAlign:'center'}}>
                    <span>
                        {'Search results (' + currentFilms.length + ')'}
                    </span>
                </div>
               {

                searchValue ? 
                    <div 
                        style = {{width:'100%', marginTop:'-1%', backgroundColor:'rgba(246, 246, 246)',paddingBottom:'0px',opacity:'1'}}
                    >
                        {
                            currentFilms.map(function(film, index){
                                if(film[1].match(searchValue) || film[4].match(searchValue) || film[8].match(searchValue) || film[9].match(searchValue) || film[10].match(searchValue)){
                                    checkFilms++;
                                    filmsCount++;
                                    return createFilmBlock(film[1], film[2], film[4],film[8],film[9], filmsCount,film[0]);
                                }else if(index === currentFilms.length - 1 && !checkFilms){
                                    return nothingFound();
                                }
                                return true;
                            })
                        }
                    </div> : false
                }
            <Footer paddingBottomNoNeed = {true}/>
        </>
    );
}
export default FilmSearch;