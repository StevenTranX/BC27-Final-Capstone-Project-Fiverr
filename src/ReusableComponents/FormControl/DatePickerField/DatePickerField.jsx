import { FormControl, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
const DatePickerField = (props) => {
  const { form, name, label, disabled, setValue, value } = props;
  const {
    formState: { errors },
    control,
  } = form;
  const hasError = errors[name];

  const handleChange = (event) => {
    setValue('birthday', event);
  };
  return (
    <>
      <Controller
        disabled={disabled}
        error={!!hasError}
        label={label}
        control={control}
        name={name}
        fullWidth
        render={({ field }) => (
          <FormControl fullWidth margin="normal">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                {...field}
                label="Date of Birth"
                value={value || new Date()}
                onChange={(newDate) => {
                  handleChange(newDate);
                }}
                renderInput={(params) => <TextField {...params} />}
                inputFormat="DD/MM/YYYY"
              />
            </LocalizationProvider>
          </FormControl>
        )}
      />
    </>
  );
};

export default DatePickerField;
