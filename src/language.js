import React, {useState} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function Language(props){
    const [value1,setValue1] = useState(true);
    const [value2,setValue2] = useState(false);
    const [value3,setValue3] = useState(false);

    const handleChange = name =>event=>{
       if ( name === 'eng'){
           setValue1(event.target.checked);
           setValue2(!event.target.value);
           setValue3(!event.target.value);
        }
        else
       if( name === 'rus'){
           setValue2(event.target.value)
           setValue1(!event.target.value);
           setValue3(!event.target.value);
       }
       else{
        setValue3(event.target.value);
        setValue1(!event.target.value);
        setValue2(!event.target.value);
       }
    }
    return (
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch checked={value1} onChange={handleChange('eng')} value="eng" />
            }
            label="English"
          />
          <FormControlLabel
            control={
              <Switch checked={value2} onChange={handleChange('rus')} value="rus" />
            }
            label="Russian"
          />
          <FormControlLabel
            control={
              <Switch checked={value3} onChange={handleChange('arm')} value="arm" />
            }
            label="Armenian"
          />
        </FormGroup>
    );
}