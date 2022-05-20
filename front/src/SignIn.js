import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SignIn = ( { friends, setOption }) => {
  const [user, setUser] = React.useState();

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const option = friends.map(friend => {
    return(
    <MenuItem key= {friend.id} value={friend.id}>{friend.username}</MenuItem>
  )})

  return (
    <div>
      <br></br>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">User</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="sort-item"
            value = {setOption(user)}
            label="User"
            onChange={handleChange}
          >
            {option}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default SignIn