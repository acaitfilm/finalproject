import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
    signupMainText:{
        textAlign:'center',
        fontSize:'190%',
        fontWeight:'bold',
        paddingBottom:'4%'
    },
    signupMainDiv:{
        marginTop:'7.8%'
    },
    signupFullnameDiv:{
    },
    signupSecondDiv:{
        marginLeft:'33.5%'
    },
    signupThirdDiv:{
        marginLeft:'33.5%',
        marginTop:'1.5%',
    },
    signupSignUpDiv:{
        marginLeft:'46.6%',
        marginTop:'2%',
    },
    signUphaveAnAccount:{
        marginTop:'2%',
        marginLeft:'42.75%'
    },
    loginMainDiv:{
        marginTop: '9%',  
    },
    loginMainText:{
        textAlign:'center',
        fontSize:'190%',
        fontWeight:'bold',
        paddingBottom:'2%',
        color:'#8B4513'
    },
    loginFirstDiv:{
        marginLeft:'43.5%'
    },
    loginSecondDiv:{
        marginLeft:'43.5%',
        marginTop:'2%',
    },
    loginBtnDiv:{
        marginTop:'2%',
        marginLeft:'46.6%'
    },
    notchedOutline: {
        borderWidth: "2px",
        borderColor: "#8B4513 !important",
        
    },
    hiddenInput:{
        display:'none'
    },
    headerContainer:{
        display: 'flex',
        flexDirection:'column',
        position: 'relative',
    },
    headerInput: {
        marginLeft: theme.spacing(1),
        backgroundColor:'rgba(246, 246, 246)',
        padding: '10px 10px 10px 10px',
        flex: '1',
      },
    iconButton: {
        padding: '10',
    },
    hover:{
        '&:hover': {
            backgroundColor: 'fade(theme.palette.common.white, 0.25)',
            }
    },
    headerMainDiv:{
        padding:'2% 3% 2.5% 3%', 
        backgroundColor:'rgba(246, 246, 246)',
    },
    logoImage:{
        display:'inline-block'
    },
    headerIcon:{
        width:'27%',
        height:'100px', 
        marginLeft:'2%',
        cursor:'pointer',
        display:'inline-block',
    },
    headerIconText:{
        position:'absolute', 
        marginTop:'1.7%', 
        marginLeft:'1%', 
        fontSize:'240%', 
        color:'rgba(238, 133, 99)'
    },
    headerSearch:{
        position:'absolute', 
        marginTop:'-5.3%', 
        marginLeft:'37%',
    },
    headerUsernameHolder:{
        position:'absolute', 
        right:'0', 
        top:'39%', 
        marginRight:'19%', 
        width:'14%', 
        cursor:'pointer'
    },
    headerUsernameText:{
        marginTop:'3%', 
        paddingBottom:'1%', 
        position:'absolute', 
        marginLeft:'3%', 
        color:'rgba(234, 65, 101)', 
        fontWeight:'bold',
        fontSize:'110%',
        '&:hover': {
            borderBottom: '3px solid',
            }
    },
    headerLogOut:{
        fontWeight: 'bold',
        color: 'orange',
        position:'absolute', 
        right:'0', 
        top:'39%', 
        marginRight:'8%'
    },
    headerWelcome:{
        position:'absolute', 
        right:'0', 
        top:'39%', 
        marginRight:'26.5%'
    },
    headerLogInBtn:{
        position:'absolute', 
        right:'0', 
        top:'39%', 
        marginRight:'17.25%'
    },
    headerSignUpBtn:{
        position:'absolute', 
        right:'0', 
        top:'39%', 
        marginRight:'8%'
    }
}));

export {styles};