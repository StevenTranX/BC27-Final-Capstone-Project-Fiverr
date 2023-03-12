import { TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { FormHelperText } from '@mui/material';
import { useSelector } from 'react-redux';

const InputField = (props) => {
  const {
    form,
    name,
    label,
    type,
    defaultValue,
    setValue,
    value,
    control,
    errors,
  } = props;

  const hasError = errors[name];

  return (
    <>
      <Controller
        error={!!hasError}
        label={label}
        control={control}
        name={name}
        defaultValue={defaultValue}
        onChange={setValue}
        render={({ field }) => (
          <TextField
            type={type}
            fullWidth
            margin='normal'
            label={label}
            value={value}
            {...field}
          />
        )}
      />
      <FormHelperText sx={{ fontWeight: '14px' }} error={!!hasError}>
        {errors[name]?.message}
      </FormHelperText>
    </>
  );
};

export default InputField;
