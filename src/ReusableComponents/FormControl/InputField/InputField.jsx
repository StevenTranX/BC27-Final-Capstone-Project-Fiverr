import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import { FormHelperText } from '@mui/material';
import { useSelector } from 'react-redux';

const InputField = (props) => {
  const { form, name, label, disabled, type, defaultValue } = props;
  if (form) {
    const {
      formState: { errors },
      control,
    } = form;
    const hasError = errors[name];

    return (
      <>
        <Controller
          error={!!hasError}
          label={label}
          control={control}
          name={name}
          defaultValue={defaultValue}
          render={({ field }) => (
            <TextField
              type={type}
              fullWidth
              margin="normal"
              label={label}
              {...field}
            />
          )}
        />
        <FormHelperText sx={{ fontWeight: '14px' }} error={!!hasError}>
          {errors[name]?.message}
        </FormHelperText>
      </>
    );
  } else return null;
};

export default InputField;
