import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
const DatePickerField = (props) => {
  const { form, name, label, disabled } = props;
  const {
    formState: { errors },
    control,
  } = form;
  const hasError = errors[name];

  const [date, setDate] = React.useState(new Date());
  console.log(dayjs(date).format('DD/MM/YYYY'));

  const handleChange = (event) => {
    setDate(event);
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
          <LocalizationProvider
            fullWidth
            margin="normal"
            dateAdapter={AdapterDayjs}
          >
            <DatePicker
              label="Basic example"
              value={date}
              onChange={(newDate) => {
                handleChange(newDate);
              }}
              renderInput={(params) => <TextField {...params} />}
              inputFormat="DD/MM/YYYY"
            />
          </LocalizationProvider>
        )}
      />
    </>
  );
};

export default DatePickerField;
