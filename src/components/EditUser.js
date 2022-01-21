import { FormGroup, FormControl, Input, ButtonGroup, InputLabel, makeStyles, Typography, Button, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { editUsers, getUsers } from '../Service/api';
import { useNavigate, useParams, Link } from 'react-router-dom';
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

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { fname, lname, email, state, city, pincode } = user;
    const { id } = useParams();
    const classes = useStyle();
    const navigate = useNavigate();

    useEffect(() => {
        loadUserData(); // api call
    }, []);

    const loadUserData = async () => {
        const response = await getUsers(id);
        setUser(response.data);
    }
    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }

    const editUserDetails = async () => {
        await editUsers(id, user);
        navigate('/all');
    }

    return (
        <>
            <FormGroup className={classes.container}>
                <Typography variant='h4'>Edit User</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <FormControl>
                            <InputLabel>FirstName</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name='fname' value={fname} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>LastName</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name='lname' value={lname} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Email</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} disabled name='email' value={email} />
                        </FormControl>
                    </Grid>
                </Grid>  
                <Grid container spacing={2}>  
                    <Grid item xs={8}>
                        <FormControl>
                            <InputLabel>State</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name='state' value={state} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>City</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name='city' value={city} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>PinCode</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} inputProps={{ maxLength: 6 }} required name='pincode' value={pincode} />
                        </FormControl>
                    </Grid>
                </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={4}>
                        <Button variant='contained' onClick={() => editUserDetails()} style={{ marginRight: 10 }} color="primary">Edit User</Button>
                        <Button variant='contained' component={Link} to={'/all'} color="error">Cancel User</Button>
                    </Grid>

                </Grid>


            </FormGroup>


        </>
    )
};

export default EditUser;
