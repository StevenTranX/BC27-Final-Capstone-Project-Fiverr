import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

const InputField = (props) => {
  const { form, name, label, disabled } = props;
  const { formState, control } = form;
  //   const hasError = formState.touched[name] && errors[name];
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { name } }) => (
          <TextField fullWidth margin="normal" name={name} label={label} />
        )}
      />
    </>
  );
};

export default InputField;
