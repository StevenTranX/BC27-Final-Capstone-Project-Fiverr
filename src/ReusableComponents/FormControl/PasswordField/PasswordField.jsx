import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormHelperText, OutlinedInput } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

const PasswordField = (props) => {
  const { form, name, label, disabled } = props;
  const {
    formState: { errors },
    control,
  } = form;
  const hasError = errors[name];
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  return (
    <Controller
      disabled={disabled}
      control={control}
      name={name}
      label={label}
      render={({ field }) => (
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
          <OutlinedInput
            label={label}
            type={showPassword ? "text" : "password"}
            {...field}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText
            sx={{ margin: 0, marginTop: "12px", fontWeight: "14px" }}
            error={!!hasError}
          >
            {errors[name]?.message}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};
export default PasswordField;
