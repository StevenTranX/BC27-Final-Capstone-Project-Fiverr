import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import { FormHelperText } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectField = (props) => {
  const { form, name, label, disabled } = props;
  const {
    formState: { errors },
    control,
  } = form;
  const hasError = errors[name];

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Controller
        disabled={disabled}
        error={!!hasError}
        label={label}
        control={control}
        name={name}
        render={({ field }) => (
          <FormControl fullWidth margin="normal">
            <InputLabel id={name}>{label}</InputLabel>
            <Select
              labelId={name}
              id={name}
              value={age}
              label={label}
              onChange={handleChange}
            >
              <MenuItem value={true}>Male</MenuItem>
              <MenuItem value={false}>Female</MenuItem>
            </Select>
          </FormControl>
        )}
      />
    </>
  );
};

export default SelectField;
