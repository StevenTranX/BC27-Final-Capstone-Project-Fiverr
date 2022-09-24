import { TextField, Typography } from '@mui/material';

import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Avatar from '@mui/material/Avatar';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import InputField from '../../../../Components/InputField';
import Button from '@mui/material/Button';
import PasswordField from '../../../../Components/PasswordField';
const RegisterForm = (props) => {
  const schema = yup.object().shape({
    taiKhoan: yup.string().required('Please enter username'),
    matKhau: yup.string().required('Please enter password').min(6).max(20),
    retypePassword: yup
      .string()
      .oneOf([yup.ref('matKhau'), null])
      .required(),
    email: yup.string().email().required('Please enter email'),
    soDt: yup.string().required('Phone number is required'),
  });

  const form = useForm({
    resolver: yupResolver(schema),
  });
  const { register, handleSubmit } = form;
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Avatar sx={{ backgroundColor: 'purple', margin: '0 auto' }}>
        <LockOpenIcon />
      </Avatar>
      <Typography
        sx={{ textAlign: 'center', margin: '10px 0px 20px 0px' }}
        component="h2"
        variant="h5"
      >
        Create an account
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name="taiKhoan"
          label="Username"
          {...register('taiKhoan')}
          form={form}
        />
        <PasswordField
          name="matKhau"
          label="Password"
          {...register('matKhau')}
          form={form}
        />
        <PasswordField
          name="retypePassword"
          label="Retype Password"
          {...register('retypePassword')}
          form={form}
        />
        <InputField
          name="email"
          label="Email"
          {...register('email')}
          form={form}
        />
        <InputField
          name="soDt"
          label="Phone Number"
          {...register('soDt')}
          form={form}
        />
        <Button
          sx={{
            backgroundColor: 'purple',
            margin: '0 auto',
            marginTop: '15px',
            height: '50px',
          }}
          type="submit"
          variant="contained"
          fullWidth
        >
          Create an account
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
