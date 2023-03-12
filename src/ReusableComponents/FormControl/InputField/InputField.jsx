import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormHelperText } from "@mui/material";

const InputField = (props) => {
  const { form, name, label, type, defaultValue, setValue, value, control } =
    props;
  const { formState: errors } = form;
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
            margin="normal"
            label={label}
            value={value}
            {...field}
          />
        )}
      />
      <FormHelperText sx={{ fontWeight: "14px" }} error={errors[name]}>
        {errors[name]?.message}
      </FormHelperText>
    </>
  );
};

export default InputField;
