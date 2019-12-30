import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles({
    root: {
        fontWeight: 'bold',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        width: 120,
        padding: '0 30px',
      },
    divMargins: {
        marginTop: "3.5%",
        marginLeft: "45%",
    },
    speedDivMargins: {
        marginTop: "10%",
        marginLeft: "38%",
    },
    speedDiv: {
        marginTop: "10%",
        marginLeft: "36.3%",
        fontSize: '30px'
    }
});

export {styles};