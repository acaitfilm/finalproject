import React, {useState, useEffect} from 'react';
import './styles.css';
import axios from 'axios';
import Header from './header';
import Footer from './footer';
function Main(props){
    const [currentUser, setCurrentUser] = useState([]);
    const [users,setUsers] =useState([]);
    useEffect(() => {
        if(localStorage.getItem('username')){
            updateUsers();
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
    
    const logOut = () => {
        localStorage.removeItem('username');
        props.history.replace('/main');
    }
    const replaceHistory = (newAddress) => {
        props.history.replace(newAddress);
    }
    document.title = 'Choose your film to watch';
    document.body.style.backgroundImage='';
    return(
        <>
            <Header 
                logout = {logOut} 
                replaceHistory = {replaceHistory} 
                currentUser = {currentUser}
            />                        
           
            {/* <div style = {{backgroundColor:'rgba(234, 65, 101)'}}>
                <div className = 'firstPic'></div>
                <div className = 'secondPic'></div>
                <div className = 'thirdPic'></div>
                <div className = 'fourthPic'></div>
                <div className = 'fifthPic'></div>
            </div> */}
            
            <Footer
                
            />
            
            
        </>
    );
}

export default Main;