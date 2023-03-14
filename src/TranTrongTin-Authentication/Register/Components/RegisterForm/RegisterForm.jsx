import { yupResolver } from "@hookform/resolvers/yup";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { LinearProgress, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import DatePickerField from "../../../../ReusableComponents/FormControl/DatePickerField";
import InputField from "../../../../ReusableComponents/FormControl/InputField";
import MultipleSelectCertification from "../../../../ReusableComponents/FormControl/MultipleSelectField/MultipleSelectCertification";
import MultipleSelectSkillField from "../../../../ReusableComponents/FormControl/MultipleSelectField/MultipleSelectSkillField";
import PasswordField from "../../../../ReusableComponents/FormControl/PasswordField";
import { closeModal, registerUser } from "../../../slices/authSlice";
import omit from "lodash/omit";
import SelectGender from "../../../../ReusableComponents/FormControl/SelectField/SelectGender";
import SelectRole from "../../../../ReusableComponents/FormControl/SelectField/SelectRole";
import dayjs from "dayjs";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const schema = yup.object().shape({
    name: yup.string().required("Please enter your username"),
    password: yup.string().required("Please enter password").min(6),
    retypePassword: yup
      .string()
      .oneOf([yup.ref("password")], `Password doesn't match, please try again`)
      .required("Please Retype your Password"),
    email: yup.string().email().required("Please enter your email"),
    phone: yup.string().required("Phone number is required").min(10).max(10),
  });

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      retypePassword: "",
      phone: "",
      birthday: "",
      gender: true,
      role: "USER",
      skill: [],
      certification: [],
    },
    resolver: yupResolver(schema),
  });

  const [retypePassword, setRetypePassword] = useState();
  const { register, handleSubmit, setValue, control, reset, getValues } = form;
  const { isSubmitting, errors } = form.formState;
  const [localValue, setLocalValue] = React.useState(new Date(1990, 0, 1));
  const handleChangeDate = (date) => {
    setValue("birthday", dayjs(date).format("DD/MM/YYYY"));
    setLocalValue(date);
  };
  console.log(errors);
  const skillValues = getValues("skill");
  const certificationValues = getValues("certification");

  const onSubmit = handleSubmit(async (values) => {
    const newValues = omit(values, "retypePassword");
    console.log(newValues);
    try {
      await dispatch(registerUser(newValues)).unwrap();
      reset();
      enqueueSnackbar("Register Successfully", { variant: "success" });
      setTimeout(() => {
        dispatch(closeModal());
      }, 1500);
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
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
          errors={errors}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <PasswordField
              name="password"
              label="Password"
              control={control}
              errors={errors}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PasswordField
              name="retypePassword"
              label="Retype Password"
              control={control}
              value={retypePassword}
              onChange={(event) => setRetypePassword(event.target.value)}
              errors={errors}
            />
          </Grid>
        </Grid>
        <InputField
          name="email"
          label="Email"
          control={control}
          form={form}
          errors={errors}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <DatePickerField
              name="birthday"
              label="Birthday"
              form={form}
              onChange={handleChangeDate}
              control={control}
              value={localValue}
              setValue={setValue}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              type="number"
              name="phone"
              label="Phone Number"
              form={form}
              control={control}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <SelectGender
              name="gender"
              label="Gender"
              form={form}
              control={control}
              select1={"Male"}
              select2={"Female"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectRole
              name="role"
              label="Role"
              form={form}
              control={control}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <MultipleSelectSkillField
              name="skill"
              label="Skill"
              form={form}
              control={control}
              onChange={setValue}
              getValues={getValues}
              disabled={isSubmitting}
              value={skillValues}
              setValue={setValue}
              errrors={errors}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MultipleSelectCertification
              name="certification"
              label="Certification"
              refs={register("certification")}
              form={form}
              control={control}
              onChange={setValue}
              getValues={getValues}
              disabled={isSubmitting}
              value={certificationValues}
              setValue={setValue}
              errrors={errors}
            />
          </Grid>
        </Grid>
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
