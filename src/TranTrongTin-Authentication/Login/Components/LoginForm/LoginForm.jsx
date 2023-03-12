import { LinearProgress, Typography } from "@mui/material";

import { yupResolver } from "@hookform/resolvers/yup";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../ReusableComponents/FormControl/InputField";
import PasswordField from "../../../../ReusableComponents/FormControl/PasswordField";

const LoginForm = (props) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Wrong email format, please try again")
      .required("Please enter your email"),
    password: yup
      .string()
      .required("Please enter password")
      .min(6, "Password length is greater than 6 letters")
      .max(20, "Password length is less than 20 letters"),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const { handleSubmit, control, reset } = form;
  const { isSubmitting } = form.formState;
  const handleSubmitChild = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
      reset();
    }
  };
  return (
    <div>
      <Avatar sx={{ backgroundColor: "purple", margin: "0 auto" }}>
        <LockOpenIcon />
      </Avatar>
      <Typography
        sx={{ textAlign: "center", margin: "10px 0px 20px 0px" }}
        component="h2"
        variant="h5"
      >
        Login
      </Typography>
      {isSubmitting && <LinearProgress color="secondary" />}
      <form onSubmit={handleSubmit(handleSubmitChild)}>
        <InputField name="email" label="Email" control={control} form={form} />
        <PasswordField
          name="password"
          label="Password"
          control={control}
          form={form}
        />
        <Button
          sx={{
            backgroundColor: "purple",
            margin: "0 auto",
            marginTop: "15px",
            height: "50px",
          }}
          type="submit"
          variant="contained"
          fullWidth
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
