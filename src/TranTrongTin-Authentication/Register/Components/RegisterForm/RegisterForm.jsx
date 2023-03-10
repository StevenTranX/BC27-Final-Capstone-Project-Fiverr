import { yupResolver } from "@hookform/resolvers/yup";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { LinearProgress, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import DatePickerField from "../../../../ReusableComponents/FormControl/DatePickerField";
import InputField from "../../../../ReusableComponents/FormControl/InputField";
import MultipleSelectCertification from "../../../../ReusableComponents/FormControl/MultipleSelectField/MultipleSelectCertification";
import MultipleSelectSkillField from "../../../../ReusableComponents/FormControl/MultipleSelectField/MultipleSelectSkillField";
import PasswordField from "../../../../ReusableComponents/FormControl/PasswordField";
import SelectField from "../../../../ReusableComponents/FormControl/SelectField";
const RegisterForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Please enter your username"),
    password: yup.string().required("Please enter password").min(6),
    retypePassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required("Please Retype your Password"),
    email: yup.string().email().required("Please enter your email"),
    phone: yup.string().required("Phone number is required").min(10).max(10),
    birthday: yup.date().required("Please enter your date of birth"),
    gender: yup.bool().required("Please select your gender"),
    role: yup.string().required("Please enter your role"),
    skill: yup
      .array()
      .of(yup.string())
      .required("Please select at least 1 skill"),
    certification: yup.array().required("Please select certification"),
  });

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
      role: "",
      skill: [],
      certification: [],
    },
    // resolver: yupResolver(schema),
  });

  const [retypePassword, setRetypePassword] = useState();
  const { register, handleSubmit, setValue, control } = form;
  const { isSubmitting } = form.formState;
  const onSubmit = handleSubmit(async (values) => {
    // const { onSubmit } = props;
    // try {
    //   if (onSubmit) {
    //     await onSubmit(values);
    //     form.reset();
    //     setRetypePassword("");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    console.log(values);
  });

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
        Create an account
      </Typography>
      {isSubmitting && <LinearProgress color="secondary" />}
      <form onSubmit={onSubmit}>
        <InputField
          name="name"
          label="Username"
          form={form}
          control={control}
        />
        {/* <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <PasswordField
              name="password"
              label="Password"
              refs={register("password")}
              form={form}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PasswordField
              name="retypePassword"
              label="Retype Password"
              form={form}
              value={retypePassword}
              onChange={(event) => setRetypePassword(event.target.value)}
            />
          </Grid>
        </Grid>
        <InputField
          name="email"
          label="Email"
          refs={register("email")}
          form={form}
        /> */}
        {/* <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <DatePickerField
              name="birthday"
              label="Birthday"
              refs={register("birthday")}
              form={form}
              setValue={setValue}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              type="number"
              name="phone"
              label="Phone Number"
              refs={register("phone")}
              form={form}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <SelectField
              name="gender"
              label="Gender"
              refs={register("gender")}
              form={form}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="role"
              label="Role"
              refs={register("role")}
              form={form}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <MultipleSelectSkillField
              name="skill"
              label="Skill"
              inputRef={register("skill")}
              form={form}
              onChange={setValue}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MultipleSelectCertification
              name="certification"
              label="Certification"
              refs={register("certification")}
              form={form}
              onChange={setValue}
            />
          </Grid>
        </Grid> */}
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
          Create an account
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
