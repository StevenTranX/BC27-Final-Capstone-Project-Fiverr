import {  TextField, Typography } from '@mui/material';

import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import Avatar from '@mui/material/Avatar';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const RegisterForm = (props) => {
 
  const schema = yup.object().shape({
    taiKhoan : yup.string().required('Required'),
    mauKhau : yup.string().required('Required'),
    email : yup.string().required('Required'),
    soDt : yup.string().required('Required'),
  })


  const form = useForm({
    resolver : yupResolver(schema)
  });
  const {register, handleSubmit} = form
  const onSubmit = (values) => {
    console.log(values);
  }
  return (
    <div >
        <Avatar sx = {{ backgroundColor : 'purple' , margin : 1.5}}>
          <LockOpenIcon/>
        </Avatar>
        <Typography component = "h3" variant = 'h5'>
          Create an account
        </Typography>
          <form onSubmit = {handleSubmit(onSubmit)}>
            <TextField name = "taiKhoan"  variant="outlined" label = "Full name" form = {form}/>
            <TextField name = "mauKhau"  variant="outlined" label = "Password" form = {form}/>
            <TextField name = "retypePassword"  variant="outlined" label = "Retype Password" form = {form}/>
            <TextField name = "email"  variant="outlined" label = "Email" form = {form}/>
            <TextField name = "soDt"  variant="outlined" label = "Phone Number" form = {form}/>
          </form>
    </div>
  );
};

export default RegisterForm;


