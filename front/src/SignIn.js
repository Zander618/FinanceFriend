import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SignIn = () => {
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <p>Username</p>
    <TextField id="outlined-basic" label="Username" variant="outlined"/>
    <p>Password</p>
    <TextField id="outlined-basic" label="Password" variant="outlined"/>
    <br></br>
    <button>Sign In</button>
  </Box>
  )
}

export default SignIn