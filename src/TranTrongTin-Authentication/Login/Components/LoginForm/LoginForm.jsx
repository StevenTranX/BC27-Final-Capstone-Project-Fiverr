import { LinearProgress, TextField, Typography } from '@mui/material';

import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Avatar from '@mui/material/Avatar';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import InputField from '../../../../ReusableComponents/FormControl/InputField';
import Button from '@mui/material/Button';
import PasswordField from '../../../../ReusableComponents/FormControl/PasswordField';
import SelectField from '../../../../ReusableComponents/FormControl/SelectField';
import Grid from '@mui/material/Grid';
import DatePickerField from '../../../../ReusableComponents/FormControl/DatePickerField';
import MultipleSelectSkillField from '../../../../ReusableComponents/FormControl/MultipleSelectField/MultipleSelectSkillField';
import MultipleSelectCertification from '../../../../ReusableComponents/FormControl/MultipleSelectField/MultipleSelectCertification';
const LoginForm = (props) => {
  const schema = yup.object().shape({
    // name: yup.string().required('Please enter your username'),
    // password: yup.string().required('Please enter password').min(6).max(20),
    // retypePassword: yup
    //   .string()
    //   .oneOf([yup.ref('password'), null])
    //   .required('Please Retype your Password'),
    // email: yup.string().email().required('Please enter your email'),
    // phone: yup.string().required('Phone number is required'),
    // // birthday: yup.date().required('Please enter your date of birth'),
    // gender: yup.bool().required('Please select your gender'),
    // role: yup.string().required('Please enter your role'),
    skill: yup.array().of(yup.string()),
    // certification: yup.array(),
  });

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = form;
  const { isSubmitting } = form.formState;
  const handleSubmitChild = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
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
        Login
      </Typography>
      {isSubmitting && <LinearProgress color="secondary" />}
      <form onSubmit={handleSubmit(handleSubmitChild)}>
        <InputField
          name="email"
          label="Email"
          refs={register('email')}
          form={form}
        />
        <PasswordField name="password" label="Password" form={form} />
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
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
