import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import BioTagInput from "../../../../../ReusableComponents/Profile__Bio/BioTags/BioTagInput";
import BioTagSelect from "../../../../../ReusableComponents/Profile__Bio/BioTags/BioTagSelect";
import BioTagSelectDate from "../../../../../ReusableComponents/Profile__Bio/BioTags/BioTagSelectDate";
import BioTagSelectMultiple from "../../../../../ReusableComponents/Profile__Bio/BioTags/BioTagSelectMultiple";
import { getUser, updateUser } from "../../../Slices/userProfileSlice";
import styles from "./Profile__Bio.module.scss";

const ProfileBio = (props) => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isSkill] = useState(true);
  const schema = yup.object().shape({
    name: yup.string().required("Please enter your username"),
    // password: yup.string().required("Please enter password").min(6),
    // email: yup.string().email(),
    phone: yup
      .number("Please fill in number")
      .required("Please enter your phone number"),
    // birthday: yup.date(),
    // skill: yup
    //   .array()
    //   .of(yup.string())
    //   .required("Please select at least 1 skill"),
    // certification: yup.array().required("Please select certification"),
  });
  const { userId } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    dispatch(getUser(userId));
  }, [userId, dispatch]);

  const defaultValues = {
    id: 0,
    email: "",
    name: "",
    phone: "",
    birthday: "",
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
      setValue("id", currentUser.id);
      setValue("email", currentUser.email);
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
    try {
      await dispatch(updateUser(values)).unwrap();
      enqueueSnackbar("User updated successfully", { variant: "success" });
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  });

  if (currentUser) {
    return (
      <>
        <div className={styles.cardLayout}>
          <div className={styles.cardWrapper}>
            <form onSubmit={onSubmit}>
              <BioTagInput
                leftHeader="Name"
                rightHeader="Edit your name"
                register={register}
                name="name"
                getValues={getValues}
                onSubmit={onSubmit}
                errors={errors}
                disabled={isSubmitting}
              />
              <BioTagInput
                leftHeader="Phone"
                rightHeader="Edit your phone number"
                register={register}
                name="phone"
                getValues={getValues}
                onSubmit={onSubmit}
                errors={errors}
                disabled={isSubmitting}
              />
              <BioTagSelectDate
                leftHeader="Date of birth"
                errors={errors}
                rightHeader="Edit your Date of birth"
                getValues={getValues}
                name="birthday"
                onSubmit={onSubmit}
                control={control}
                form={form}
                setValue={setValue}
              />
              <BioTagSelect
                leftHeader="Gender"
                errors={errors}
                rightHeader="Edit your gender"
                getValues={getValues}
                name="gender"
                onSubmit={onSubmit}
                control={control}
                form={form}
                disabled={isSubmitting}
              />
              <BioTagSelectMultiple
                leftHeader="Skill"
                errors={errors}
                rightHeader="Edit your skill"
                getValues={getValues}
                name="skill"
                onSubmit={onSubmit}
                control={control}
                form={form}
                isSkill={true}
                disabled={isSubmitting}
              />
              <BioTagSelectMultiple
                leftHeader="Certificate"
                errors={errors}
                rightHeader="Edit your certificate"
                getValues={getValues}
                name="certification"
                onSubmit={onSubmit}
                control={control}
                form={form}
                isSkill={false}
                disabled={isSubmitting}
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
