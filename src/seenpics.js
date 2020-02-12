import React, {useState} from 'react';
import {styles} from './styles';
//import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
//import Rating from '@material-ui/lab/Rating';
//import Box from '@material-ui/core/Box';
import pic1 from './filmpics/1.jpg';
import pic2 from './filmpics/2.jpg';
import pic3 from './filmpics/3.jpg';
import pic4 from './filmpics/4.jpg';
import pic5 from './filmpics/5.jpg';
import pic6 from './filmpics/6.jpeg';
import pic7 from './filmpics/7.PNG';
import pic8 from './filmpics/8.jpg';
import pic9 from './filmpics/9.jpg';
import pic10 from './filmpics/10.jpeg';
import pic11 from './filmpics/11.jpg'
import pic12 from './filmpics/12.jpg'
import pic13 from './filmpics/13.jpg'
import pic14 from './filmpics/14.jpg'
import pic15 from './filmpics/15.jpg'
import pic16 from './filmpics/16.jpg'
import pic17 from './filmpics/17.jpg'
import pic18 from './filmpics/18.jpg'
import pic19 from './filmpics/19.jpg'
import pic20 from './filmpics/20.jpg'


//irakanum petqa stacvi zaprosi ardyunqum url-nerov
const seenPics = [ 
                    0,pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10,
                    pic11,pic12,pic13,pic14,pic15,pic16,pic17,pic18,pic19,pic20
                ];


export default function SeenPics(props){
    const [showDesc,setShowDesc] = useState(false);
    //const [value1,setValue1] = useState(0);
    //const [value2,setValue2] = useState(0);
    //const [value3,setValue3] = useState(0);
    //const [value4,setValue4] = useState(0);
    //const [value5,setValue5] = useState(0);
    //const [value6,setValue6] = useState(0);
    //const [value7,setValue7] = useState(0);
    //const [value8,setValue8] = useState(0);
    //const [value9,setValue9] = useState(0);
    //const [value10,setValue10] = useState(0);
    
    
    const [value,setValue] = useState(10);
    
    const handleCheckedRight = () => {
       setValue(value+10);
      
      
      };
    const handleCheckedLeft = () => {
          setValue(value-10);
      }
      const createArr = () =>{
          let arr = [];
          for(let i=value-9;i<=value;i++){
            arr.push(i);
        }
        return arr;

      } 
    const classes = styles();
    const customList = (items) => (
        <>
            {items.map(value => {
              let imgID = 'pic'+value;
    
              return (
                <div className={classes.seenPics}>
                {!showDesc?
                   <img id={imgID} src={seenPics[value]} style={{width: '200px',height: '270px',cursor:'pointer'}} alt ='' 
                            onMouseOver={()=>{document.getElementById(imgID).style.opacity='0.6'}}
                                onMouseOut={()=>{document.getElementById(imgID).style.opacity='1'}}>
                    </img> 
                    :<>
                    <img id ={imgID} src={seenPics[value]} style={{width: '200px',height: '270px',opacity:'0.6'}} alt =''
                        onMouseOut={()=>setShowDesc(false)}
                    />
                    <div className={classes.descriptionTextDiv}>
                        <p style={{cursor:'pointer',border:'1px solid rgba(234, 65, 101)',borderRadius:'4px', backgroundColor:'rgba(234, 65, 101)',color:'white'}}
                        >
                            Description
                        </p>
                     
                    </div>
               </>
            }
            }

                          {/*  <div style={{
                                    backgroundColor:'white',
                                    height:'9%'
                                }}
                            >        
                                Your rating         
                                <Box 
                                component="fieldset" 
                                mb={3} 
                                borderColor="transparent"
                                style={{position:'relative',marginLeft:'32%',marginTop:'-15%'}}
                                >
                                        
                                        <Rating
                                        
                                        name="simple-controlled1"
                                        value={value+'value'}
                                        onChange={(event, newValue) => {
                                            let fName='setValue'+{value};
                                            fName(newValue);
                                        }}
                                        />
                                    </Box>
                            </div>
                                    */}
                </div>
              );
            })}
            </>
         
      );

      const arr = createArr();
      console.log(arr);
    return(
        <div className={classes.seenFilmsDiv}>
            {customList(arr)}
            {/*
                        <div className={classes.seenPics}>
                            <img id='pic1' src={pic1} style={{width: '200px',height: '270px',cursor:'pointer'}} alt ='' 
                            onMouseOver={()=>{document.getElementById('pic1').style.opacity='0.6'}}
                                onMouseOut={()=>{document.getElementById('pic1').style.opacity='1'}}>
                                    </img>
                            <div style={{
                                    backgroundColor:'white',
                                    height:'9%'
                                }}
                            >        
                                Your rating         
                                <Box 
                                component="fieldset" 
                                mb={3} 
                                borderColor="transparent"
                                style={{position:'relative',marginLeft:'32%',marginTop:'-15%'}}
                                >
                                        
                                        <Rating
                                        
                                        name="simple-controlled1"
                                        value={value1}
                                        onChange={(event, newValue) => {
                                            setValue1(newValue);
                                        }}
                                        />
                                    </Box>
                            </div>
                        </div>
                        <div className={classes.seenPics}>
                            <img 
                                id='pic2'
                                src={pic2} 

                                onMouseOver={()=>{document.getElementById('pic2').style.opacity='0.6'}}
                                onMouseOut={()=>{document.getElementById('pic2').style.opacity='1'}}
                                style={{width: '200px',height: '270px',cursor:'pointer'}}
                                alt =''>
                                    
                            </img>
                            <div style={{
                                    backgroundColor:'white',
                                    height:'9%'
                                }}
                            >  
                            Your rating
                            <Box 
                            component="fieldset" 
                            mb={3} 
                            borderColor="transparent"
                            style={{position:'relative',marginLeft:'32%',marginTop:'-15%'}}
                            >     
                                <Rating
                                
                                name="simple-controlled2"
                                value={value2}
                                onChange={(event, newValue) => {
                                    setValue2(newValue);
                                }}
                                />
                            </Box>
                            </div>
                        </div>
                        <div className={classes.seenPics}>
                            <img id='pic3' src={pic3} style={{width: '200px',height: '270px',cursor:'pointer'}}alt =''
                            onMouseOver={()=>{document.getElementById('pic3').style.opacity='0.6'}}
                            onMouseOut={()=>{document.getElementById('pic3').style.opacity='1'}}>
                            </img>
                            <div style={{
                                    backgroundColor:'white',
                                    height:'9%'
                                }}
                            >  
                            Your rating
                        <Box 
                        component="fieldset" 
                        mb={3} 
                        borderColor="transparent"
                        style={{position:'relative',marginLeft:'32%',marginTop:'-15%'}}
                        >
                                
                                <Rating
                                
                                name="simple-controlled3"
                                value={value3}
                                onChange={(event, newValue) => {
                                    setValue3(newValue);
                                }}
                                />
                            </Box>
                            </div>
                        </div>
                        <div className={classes.seenPics}>
                            <img id='pic4'src={pic4} style={{width: '200px',height: '270px',cursor:'pointer'}} alt =''
                            onMouseOver={()=>{document.getElementById('pic4').style.opacity='0.6'}}
                            onMouseOut={()=>{document.getElementById('pic4').style.opacity='1'}}
                            ></img>
                            <div style={{
                                    backgroundColor:'white',
                                    height:'9%'
                                }}
                            >  
                            Your rating
                        <Box 
                        component="fieldset" 
                        mb={3} 
                        borderColor="transparent"
                        style={{position:'relative',marginLeft:'32%',marginTop:'-15%'}}
                        >
                                
                                <Rating
                                
                                name="simple-controlled4"
                                value={value4}
                                onChange={(event, newValue) => {
                                    setValue4(newValue);
                                }}
                                />
                            </Box>
                            </div>
                        </div>
                        <div className={classes.seenPics}>
                            <img id='pic5'src={pic5} style={{width: '200px',height: '270px',cursor:'pointer'}} alt =''
                                onMouseOver={()=>{document.getElementById('pic5').style.opacity='0.6'}}
                                onMouseOut={()=>{document.getElementById('pic5').style.opacity='1'}}
                            ></img>
                            <div style={{
                                    backgroundColor:'white',
                                    height:'9%'
                                }}
                            >  
                            Your rating
                            <Box 
                            component="fieldset" 
                            mb={3} 
                            borderColor="transparent"
                            style={{position:'relative',marginLeft:'32%',marginTop:'-15%'}}
                            >
                                    
                                    <Rating
                                    
                                    name="simple-controlled5"
                                    value={value5}
                                    onChange={(event, newValue) => {
                                        setValue5(newValue);
                                    }}
                                    />
                                </Box>
                        </div>
                        </div>
                        <div className={classes.seenPics}>
                            <img id='pic6' src={pic6} style={{width: '200px',height: '270px',cursor:'pointer'}} alt =''
                                onMouseOver={()=>{document.getElementById('pic6').style.opacity='0.6'}}
                                onMouseOut={()=>{document.getElementById('pic6').style.opacity='1'}}
                        ></img>
                        <div style={{
                                    backgroundColor:'white',
                                    height:'9%'
                                }}
                            >  
                        Your rating
                        <Box 
                        component="fieldset" 
                        mb={3} 
                        borderColor="transparent"
                        style={{position:'relative',marginLeft:'32%',marginTop:'-15%'}}
                        >
                                
                                <Rating
                                
                                name="simple-controlled6"
                                value={value6}
                                onChange={(event, newValue) => {
                                    setValue6(newValue);
                                }}
                                />
                            </Box>
                            </div>
                        </div>
                        <div className={classes.seenPics}>
                            <img id='pic7'src={pic7} style={{width: '200px',height: '270px',cursor:'pointer'}}alt =''
                                onMouseOver={()=>{document.getElementById('pic7').style.opacity='0.6'}}
                                onMouseOut={()=>{document.getElementById('pic7').style.opacity='1'}}
                            ></img>
                            <div style={{
                                    backgroundColor:'white',
                                    height:'9%'
                                }}
                            >  
                            Your rating
                        <Box 
                        component="fieldset" 
                        mb={3} 
                        borderColor="transparent"
                        style={{position:'relative',marginLeft:'32%',marginTop:'-15%'}}
                        >
                                
                                <Rating
                                
                                name="simple-controlled7"
                                value={value7}
                                onChange={(event, newValue) => {
                                    setValue7(newValue);
                                }}
                                />
                            </Box>
                            </div>
                        </div>
                        <div className={classes.seenPics}>
                            <img id='pic8'src={pic8} style={{width: '200px',height: '270px',cursor:'pointer'}} alt =''
                                onMouseOver={()=>{document.getElementById('pic8').style.opacity='0.6'}}
                                onMouseOut={()=>{document.getElementById('pic8').style.opacity='1'}}
                            ></img>
                            <div style={{
                                    backgroundColor:'white',
                                    height:'9%'
                                }}
                            >  
                            Your rating
                        <Box 
                        component="fieldset" 
                        mb={3} 
                        borderColor="transparent"
                        style={{position:'relative',marginLeft:'32%',marginTop:'-15%'}}
                        >
                                
                                <Rating
                                
                                name="simple-controlled8"
                                value={value8}
                                onChange={(event, newValue) => {
                                    setValue8(newValue);
                                }}
                                />
                            </Box>
                            </div>
                        </div>
                        <div className={classes.seenPics}>
                            <img id='pic9'src={pic9} style={{width: '200px',height: '270px',cursor:'pointer'}} alt =''
                                onMouseOver={()=>{document.getElementById('pic9').style.opacity='0.6'}}
                                onMouseOut={()=>{document.getElementById('pic9').style.opacity='1'}}
                            ></img>
                            <div style={{
                                    backgroundColor:'white',
                                    height:'9%'
                                }}
                            >  
                            Your rating
                        <Box 
                        component="fieldset" 
                        mb={3} 
                        borderColor="transparent"
                        style={{position:'relative',marginLeft:'32%',marginTop:'-15%'}}
                        >
                                
                                <Rating
                                
                                name="simple-controlled9"
                                value={value9}
                                onChange={(event, newValue) => {
                                    setValue9(newValue);
                                }}
                                />
                            </Box>
                            </div>
                        </div>
                        <div className={classes.seenPics}>
                            {!showDesc ? 
                            
                                <img id ='pic10'src={pic10} style={{width: '200px',height: '270px',cursor:'pointer'}} alt =''
                                onMouseOver={()=>setShowDesc(true)}
                               // onMouseOut={()=>{document.getElementById('pic10').style.opacity='1'}}
                            />
                            
                            :<>
                                    <img id ='pic10'src={pic10} style={{width: '200px',height: '270px',opacity:'0.6'}} alt =''
                                        onMouseOut={()=>setShowDesc(false)}
                                    />
                                    <div className={classes.descriptionTextDiv}>
                                        <p style={{cursor:'pointer',border:'1px solid rgba(234, 65, 101)',borderRadius:'4px', backgroundColor:'rgba(234, 65, 101)',color:'white'}}
                                        >
                                            Description
                                        </p>
                                     
                                    </div>
                               </>
                            }
                            <div style={{
                                    backgroundColor:'white',
                                    height:'9%',
                                    //margin:'3px'
                                }}
                            >  
                            Your rating
                        <Box 
                        component="fieldset" 
                        mb={3} 
                        borderColor="transparent"
                        style={{position:'relative',marginLeft:'32%',marginTop:'-15%'}}
                        >
                                
                                <Rating
                                
                                name="simple-controlled10"
                                value={value10}
                                onChange={(event, newValue) => {
                                    setValue10(newValue);
                                }}
                                />
                            </Box>
                            </div>
                        </div>
                            */}
                        <Grid container spacing={2} justify="center" alignItems="center" style={{margin: 'auto',position:'relative',marginLeft:'45%'}}>
                            <Grid container direction="row" alignItems="center">
                                <Button
                                    variant="outlined"
                                    size="small"
                                    className={classes.buttonLR}
                                    onClick={handleCheckedLeft}
                                    disabled={arr[0]=== 1}
                                    aria-label="move selected left"
                                >
                                    &lt;
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    className={classes.buttonLR}
                                    onClick={handleCheckedRight}
                                    disabled={arr.pop()+1===seenPics.length}
                                    aria-label="move selected right"
                                >
                                    &gt;
                                </Button>
                            </Grid>
                        </Grid>
                        
                </div>
    )
}