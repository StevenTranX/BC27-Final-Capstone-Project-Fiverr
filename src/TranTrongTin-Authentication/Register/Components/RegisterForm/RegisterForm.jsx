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
    name: yup.string().required('Please enter your username'),
    password: yup.string().required('Please enter password').min(6).max(20),
    retypePassword: yup
      .string()
      .oneOf([yup.ref('password'), null])
      .required(),
    email: yup.string().email().required('Please enter your email'),
    phone: yup.string().required('Phone number is required'),
    birthday: yup.date().required('Please enter your date of birth'),
    gender: yup.bool(),
    role: yup.string(),
    skill: yup.array().of(yup.string()),
    certification: yup.array(),
  });

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
      birthday: '',
      gender: true,
      role: '',
      skill: [''],
      certification: [''],
    },
    resolver: yupResolver(schema),
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = form;
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
          name="name"
          label="Username"
          {...register('name')}
          form={form}
          ref={null}
        />
        <PasswordField
          name="password"
          label="Password"
          {...register('password')}
          form={form}
          ref={null}
        />
        <PasswordField
          name="retypePassword"
          label="Retype Password"
          form={form}
          ref={null}
        />
        <InputField
          name="email"
          label="Email"
          {...register('email')}
          form={form}
          ref={null}
        />
        <InputField
          name="phone"
          label="Phone Number"
          {...register('phone')}
          form={form}
          ref={null}
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
