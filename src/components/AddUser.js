import { FormGroup,Grid, FormControl, Input, InputLabel, makeStyles, Typography, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { addUsers } from '../Service/api';
import { useNavigate, Link } from 'react-router-dom';
;



const useStyle = makeStyles({
  container: {
    width: '80%',
    margin: '2% 0 0 10%',
    '& > *': {
      marginTop: 20
    }
  }
})

const initialValue = {
  fname: '',
  lname: '',
  email: '',
  state: '',
  city: '',
  pincode: ''

}

const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const { fname, lname, email, state, city, pincode } = user;
  const classes = useStyle();
  const navigate = useNavigate();

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(user);
  }

  const addUserDetails = async () => {
    await addUsers(user);
    navigate('/all');
  }

  return (
    <FormGroup className={classes.container}>
      <Typography variant='h4'>Add User</Typography>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <FormControl>
            <InputLabel>FirstName</InputLabel>
            <Input onChange={(e) => onValueChange(e)} required name='fname' value={fname} />
          </FormControl>
          <FormControl>
            <InputLabel>LastName</InputLabel>
            <Input onChange={(e) => onValueChange(e)} required name='lname' value={lname} />
          </FormControl>
          <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e) => onValueChange(e)} type='email' required name='email' value={email} />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <FormControl>
            <InputLabel>State</InputLabel>
            <Input onChange={(e) => onValueChange(e)} required name='state' value={state} />
          </FormControl>
          <FormControl>
            <InputLabel>City</InputLabel>
            <Input onChange={(e) => onValueChange(e)} required name='city' value={city} />
          </FormControl>
          <FormControl>
            <InputLabel>PinCode</InputLabel>
            <Input onChange={(e) => onValueChange(e)} inputProps={{ maxLength: 6 }} required name='pincode' value={pincode} />
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid item xs={4}>
          <Button variant='contained' onClick={() => addUserDetails()} style={{ marginRight: 10 }} color="primary">Add User</Button>
          <Button variant='contained' component={Link} to={'/all'} color="error">Cancel User</Button>
        </Grid>
      </Grid>
    </FormGroup>
  )
};

export default AddUser;
