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
import SelectField from '../../../../Components/SelectField';
import Grid from '@mui/material/Grid';
const RegisterForm = (props) => {
  const schema = yup.object().shape({
    name: yup.string().required('Please enter your username'),
    password: yup.string().required('Please enter password').min(6).max(20),
    retypePassword: yup
      .string()
      .oneOf([yup.ref('password'), null])
      .required('Please Retype your Password'),
    email: yup.string().email().required('Please enter your email'),
    phone: yup.string().required('Phone number is required'),
    // birthday: yup.date().required('Please enter your date of birth'),
    gender: yup.bool().required('Please select your gender'),
    role: yup.string().required('Please enter your role'),
    // skill: yup.array().of(yup.string()),
    // certification: yup.array(),
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
  const { register, handleSubmit } = form;

  const handleSubmitChild = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    // form.reset();
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
      <form onSubmit={handleSubmit(handleSubmitChild)}>
        <InputField
          name="name"
          label="Username"
          refs={register('name')}
          form={form}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <PasswordField
              name="password"
              label="Password"
              refs={register('password')}
              form={form}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PasswordField
              name="retypePassword"
              label="Retype Password"
              refs={register('retypePassword')}
              form={form}
            />
          </Grid>
        </Grid>
        <InputField
          name="email"
          label="Email"
          refs={register('email')}
          form={form}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputField
              name="birthday"
              label="Birthday"
              refs={register('birthday')}
              form={form}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              type="number"
              name="phone"
              label="Phone Number"
              refs={register('phone')}
              form={form}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <SelectField
              name="gender"
              label="Gender"
              refs={register('gender')}
              form={form}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="role"
              label="Role"
              refs={register('role')}
              form={form}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputField
              name="skill"
              label="Skill"
              refs={register('skill')}
              form={form}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="certification"
              label="Certification"
              refs={register('certification')}
              form={form}
            />
          </Grid>
        </Grid>
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
