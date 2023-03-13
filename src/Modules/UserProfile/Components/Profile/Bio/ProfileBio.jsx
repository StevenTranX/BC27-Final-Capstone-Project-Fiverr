import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import BioTags from "../../../../../ReusableComponents/Profile__Bio/BioTags/BioTags";
import { getUser } from "../../../Slices/userProfileSlice";
import styles from "./Profile__Bio.module.scss";

const ProfileBio = (props) => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    name: yup.string().required("Please enter your username"),
    // password: yup.string().required("Please enter password").min(6),
    // email: yup.string().email(),
    // phone: yup.string().min(10).max(10),
    // birthday: yup.date(),
    // skill: yup
    //   .array()
    //   .of(yup.string())
    //   .required("Please select at least 1 skill"),
    // certification: yup.array().required("Please select certification"),
  });
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getUser(userId));
  }, [userId, dispatch]);

  const defaultValues = {
    name: "",
    phone: "",
    birthday: new Date(1990, 0, 1),
    gender: true,
    role: "",
    skill: [],
    certification: [],
  };
  const form = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    register,
    setValue,
    getValues,
  } = form;
  useEffect(() => {
    if (currentUser) {
      setValue("name", currentUser.name);
      setValue("phone", currentUser.phone);
      setValue("birthday", currentUser.birthday);
      setValue("gender", currentUser.gender);
      setValue("role", currentUser?.role);
      setValue("skill", currentUser?.skill);
      setValue("certification", currentUser?.certification);
    }
  }, [currentUser, setValue]);

  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
    // const { onSubmit } = props;
    // try {
    //   if (onSubmit) {
    //     await onSubmit(values);
    //     // form.reset();
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  });

  // const handleSubmit = async (values) => {
  //   console.log(values);
  //   try {
  //     await dispatch(updateUser(values))
  //       .unwrap()
  //       .then(() => {
  //         enqueueSnackbar("User Updated", { variant: "success" });
  //       });
  //   } catch (error) {
  //     console.log(error);
  //     enqueueSnackbar(error.message, { variant: "error" });
  //   }
  // };
  if (currentUser) {
    return (
      <>
        <div className={styles.cardLayout}>
          <div className={styles.cardWrapper}>
            <form onSubmit={onSubmit}>
              <BioTags
                leftHeader="Name"
                rightHeader="Edit your name"
                register={register}
                name="name"
                getValues={getValues}
                onSubmit={onSubmit}
                errors={errors}
              />
            </form>
          </div>
        </div>
      </>
    );
  } else {
    console.log(" currentUser not available");
    return null;
  }
};

export default ProfileBio;
