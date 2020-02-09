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
        marginTop:'-5.15%', 
        marginLeft:'39%',
    },
    headerUsernameHolder:{
        position:'absolute', 
        right:'0', 
        top:'39%', 
        marginRight:'19%', 
        width:'14%', 
        cursor:'pointer',
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
    },
    footerMainDiv:{
        padding:'4% 3% 4% 0%', 
        backgroundColor:'rgba(246, 246, 246)',
        bottom: '0'
    },
    footerRights:{
        marginLeft:'42.3%',
        cursor:'default',
        fontSize:'160%',
        color:'rgb(150,150,150)',
        fontWeight:'bold',
        marginTop:'19%'
    },
    footerLanguages:{
        cursor:'pointer',
        '&:hover':{
            paddingBottom:'8%',
            borderBottom:'3px solid rgb(150,150,150)',
            transition: '0.2s'
        }
    },
    footerBackToTopText:{
        color:'rgb(150,150,150)',
        cursor:'pointer',
        fontSize:'150%',
        transition:'0.1s',
        '&:hover':{
            fontWeight:'bold',
            transition: '0.1s'
        }
    },
    footerSocialMedia:{
        zoom:'3.3', 
        cursor:'pointer',
        transition: '1.4s',
        color:'rgb(150,150,150)',
        '&:hover':{
            scale:('1.5'),
            color:'rgba(234, 65, 101)',
            transition: '0.4s'
        }
    },
    mainBookBuyBtns:{
        position:'absolute', 
        marginLeft:'43%', 
        marginTop:'38.6%', 
        padding:'0.7%',
        fontSize:'145%',
        cursor:'pointer',
        color:'rgb(234, 65, 101)',
        fontWeight:'bold',
        '&:hover':{
            borderBottom: '4px solid rgba(234, 65, 101)'
        }
    },
    filmBlockMainDiv:{
        padding:'2% 0% 5% 0%',
    },
    filmBlockBlockHolder:{
        borderTop:'6px solid rgba(234, 65, 101)', 
        //borderBottom:'11px solid rgba(234, 65, 101)',
        marginTop:'1.7%', 
        borderRadius:'8px', 
        padding:'0% 2% 2% 2%', 
        background:'linear-gradient(rgb(240,240,240), rgb(252,252,252))', 
        paddingBottom:'44.6%',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    filmBlockClockHolder:{
        textAlign:'center',
        fontSize:'140%',
        fontWeight:'bold'
    },
    filmBlockTitleHolder:{
        width:'100%',
        marginTop:'2%', 
        textAlign:'center', 
        fontSize:'205%', 
        fontWeight:'bold', 
        color:'rgba(234, 65, 101)'
    },
    filmBlockImageHolder:{
        position:'absolute', 
        marginLeft:'5%', 
        marginTop:'9.8%'
    },
    filmBlockImage:{
        width:'280px'
    },
    filmBlockMainTextHolder:{
        position:'absolute', 
        width:'51%', 
        textAlign:'justify', 
        marginTop:'4%', 
        marginLeft:'31%'
    },
    filmBlockDescriptionHolder:{
        textAlign:'center', 
        paddingBottom:'5%',
    },
    filmBlockDescriptionTextHolder:{
        lineHeight:'150%',
        fontSize:'135%',
        width:'116%'
    },
    filmBlockGenreHolder:{
        position:'absolute', 
        marginTop:'4.8%', 
        marginLeft:'5%', 
        fontSize:'170%', 
        fontWeight:'bold', 
        textAlign:'center', 
        color:'rgba(234, 65, 101', 
        width:'19.2%'
    },
}));

export {styles};