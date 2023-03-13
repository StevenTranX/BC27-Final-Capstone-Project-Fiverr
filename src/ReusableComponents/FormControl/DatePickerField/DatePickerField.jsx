import { FormControl, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import { Controller } from "react-hook-form";
const DatePickerField = (props) => {
  const { form, name, label, disabled, value, onChange } = props;
  const {
    formState: { errors },
    control,
  } = form;
  const hasError = errors[name];

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
                value={value}
                onChange={(newDate) => {
                  onChange(newDate);
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
