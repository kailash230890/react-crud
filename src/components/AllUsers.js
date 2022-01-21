import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../Service/api';
import { TableBody, TableRow, TableCell, Table, TableHead, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const userStyle = makeStyles({
  table: {
    width: '90%',
    margin: '10px 0 0 50px'
  },
  thead: {
    '& > *': {
      background: '#5663E1',
      color: '#ffffff',
      fontSize: 20
    }
  },
  row: {
    '& > *': {
      fontSize: 18
    }
  }
})
const AllUsers = () => {

  const [users, setUsers] = useState([])
  const classes = userStyle();

  useEffect(() => {
    getAllUsers();
  }, [])

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
  }

  const deleteUserData = async (id) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

    await deleteUser(id);
    getAllUsers(); // 
  }

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>#</TableCell>
          <TableCell>FirstName</TableCell>
          <TableCell>LastName</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>State</TableCell>
          <TableCell>City</TableCell>
          <TableCell>PinCode</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          users.map((user, index) => (
            <TableRow className={classes.row} key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.fname}</TableCell>
              <TableCell>{user.lname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.state}</TableCell>
              <TableCell>{user.city}</TableCell>
              <TableCell>{user.pincode}</TableCell>
              <TableCell>
                <Button variant='contained' color='primary' style={{ marginRight: 10 }} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                <Button variant='contained' color='secondary' onClick={() => deleteUserData(user.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  )
};

export default AllUsers;
