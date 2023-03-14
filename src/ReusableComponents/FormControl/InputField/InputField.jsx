import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormHelperText } from "@mui/material";

const InputField = (props) => {
  const { name, label, type, defaultValue, setValue, value, control, errors } =
    props;
  // const hasError = errors[name];
  const errorMessage = errors ? errors[name]?.message : "";

  return (
    <>
      <Controller
        // error={!!hasError}
        label={label}
        control={control}
        name={name}
        defaultValue={defaultValue}
        onChange={setValue}
        render={({ field }) => (
          <TextField
            type={type}
            fullWidth
            margin="normal"
            label={label}
            value={value}
            {...field}
          />
        )}
      />
      <FormHelperText sx={{ fontWeight: "14px", color: "red" }}>
        {errorMessage}
      </FormHelperText>
    </>
  );
};

export default InputField;
