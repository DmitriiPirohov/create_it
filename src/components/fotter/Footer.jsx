import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './Footer.scss'
import { width } from '@mui/system';

export const Footer = () => {
  return (
    <div className='Footer'>
      <div className="container-footer">
        <InputAdornments />
      </div>
    </div>
  );
};

const InputAdornments = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [age, setAge] = React.useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={ { display: 'flex', flexWrap: 'wrap' } }>
      <div style={{padding: '50px', border: '1px solid black', borderRadius: 8, width: '100vw', height: '400px', backgroundColor: 'grey'}}>
        <FormControl sx={ { m: 1, minWidth: 120 } } size="small">
          <InputLabel id="demo-select-small">Head</InputLabel>
          <Select
            required
            labelId="demo-select-small"
            id="demo-select-small"
            value={ age }
            label="Age"
            onChange={ handleChange }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={ 'Buisness' }>Buisness</MenuItem>
            <MenuItem value={ 'Career' }>Career</MenuItem>
            <MenuItem value={ 'Cooperation' }>Cooperation</MenuItem>
          </Select>
        </FormControl>


        {/* <FormControl sx={ { m: 1, width: '25ch' } } variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={ <InputAdornment position="end">kg</InputAdornment> }
            aria-describedby="outlined-weight-helper-text"
            inputProps={ {
              'aria-label': 'weight',
            } }
          />
          <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl sx={ { m: 1, width: '25ch' } } variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={ showPassword ? 'text' : 'password' }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={ handleClickShowPassword }
                  onMouseDown={ handleMouseDownPassword }
                  edge="end"
                >
                  { showPassword ? <VisibilityOff /> : <Visibility /> }
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl fullWidth sx={ { m: 1 } }>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={ <InputAdornment position="start">$</InputAdornment> }
            label="Amount"
          />
        </FormControl>
      </div>
      <div>
        <TextField
          label="With normal TextField"
          id="filled-start-adornment"
          sx={ { m: 1, width: '25ch' } }
          InputProps={ {
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          } }
          variant="filled"
        />
        <FormControl sx={ { m: 1, width: '25ch' } } variant="filled">
          <FilledInput
            id="filled-adornment-weight"
            endAdornment={ <InputAdornment position="end">kg</InputAdornment> }
            aria-describedby="filled-weight-helper-text"
            inputProps={ {
              'aria-label': 'weight',
            } }
          />
          <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl sx={ { m: 1, width: '25ch' } } variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={ showPassword ? 'text' : 'password' }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={ handleClickShowPassword }
                  onMouseDown={ handleMouseDownPassword }
                  edge="end"
                >
                  { showPassword ? <VisibilityOff /> : <Visibility /> }
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl fullWidth sx={ { m: 1 } } variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            startAdornment={ <InputAdornment position="start">$</InputAdornment> }
          />
        </FormControl>
      </div>
      <div>
        <TextField
          label="With normal TextField"
          id="standard-start-adornment"
          sx={ { m: 1, width: '25ch' } }
          InputProps={ {
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          } }
          variant="standard"
        />
        <FormControl variant="standard" sx={ { m: 1, mt: 3, width: '25ch' } }>
          <Input
            id="standard-adornment-weight"
            endAdornment={ <InputAdornment position="end">kg</InputAdornment> }
            aria-describedby="standard-weight-helper-text"
            inputProps={ {
              'aria-label': 'weight',
            } }
          />
          <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl sx={ { m: 1, width: '25ch' } } variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={ showPassword ? 'text' : 'password' }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={ handleClickShowPassword }
                  onMouseDown={ handleMouseDownPassword }
                >
                  { showPassword ? <VisibilityOff /> : <Visibility /> }
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl fullWidth sx={ { m: 1 } } variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={ <InputAdornment position="start">$</InputAdornment> }
          />
        </FormControl> */}
      </div>
    </Box>
  );
}
