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
    input: {
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
      }
}));

export {styles};