import { yupResolver } from '@hookform/resolvers/yup';
import { Divider } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import BioTag__Certificate from '../../../../../ReusableComponents/Profile__Bio/BioTags/BioTag__Certificate';
import BioTag__DateOfBirth from '../../../../../ReusableComponents/Profile__Bio/BioTags/BioTag__DateOfBirth';
import BioTag__Phone from '../../../../../ReusableComponents/Profile__Bio/BioTags/BioTag__Phone';
import BioTag__Skill from '../../../../../ReusableComponents/Profile__Bio/BioTags/BioTag__Skill';
import BioTag__Name from '../../../../../ReusableComponents/Profile__Bio/BioTags/BioTag__Name';
import LinkedAccountsList from './LinkedAccountsList/LinkedAccountsList';
import styles from './Profile__Bio.module.scss';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { RestartAlt } from '@mui/icons-material';
const Profile__Bio = (props) => {
  const { user } = useSelector((state) => state.auth?.current);
  const schema = yup.object().shape({
    // name: yup.string().required('Please enter your username'),
    // password: yup.string().required('Please enter password').min(6).max(20),
    // retypePassword: yup
    //   .string()
    //   .oneOf([yup.ref('password'), null])
    //   .required('Please Retype your Password'),
    // email: yup.string().email().required('Please enter your email'),
    // phone: yup.string().required('Phone number is required'),
    // // birthday: yup.date().required('Please enter your date of birth'),
    // gender: yup.bool().required('Please select your gender'),
    // role: yup.string().required('Please enter your role'),
    skill: yup.array().of(yup.string()),
    // certification: yup.array(),
  });
  const defaultValues = {
    name: user?.name,
    email: user?.email,
    password: user?.password,
    phone: user?.phone,
    birthday: user?.birthday,
    gender: user?.gender,
    role: user?.role,
    skill: user?.skill,
    certification: user?.certification,
  };
  const form = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, setValue, watch, getValues, reset } = form;
  const values = getValues();
  const { isSubmitting } = form.formState;
  console.log(watch());
  const handleSubmitChild = async (values) => {
    const { onSubmit } = props;
    try {
      if (onSubmit) {
        await onSubmit(values);
        // form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={styles.cardLayout}>
        <div className={styles.cardWrapper}>
          <form onSubmit={handleSubmit(handleSubmitChild)}>
            <BioTag__Name
              form={form}
              leftHeader="Full Name"
              rightHeader="Edit Your Full Name"
              headerTitle="Name"
              headerContent=" Type to edit your name"
              label="Full Name"
              name="name"
              type="text"
              refs={register('name')}
              setValue={setValue}
            >
              <span>{values.name}</span>
            </BioTag__Name>
            <BioTag__Phone
              form={form}
              leftHeader="Phone"
              rightHeader="Edit Phone Number"
              headerTitle="Phone Number"
              headerContent=" Type to edit your phone number "
              label="Phone Number"
              name="phone"
              type="number"
              refs={register('phone')}
              setValue={setValue}
              value={values.phone}
            >
              <span>{values.phone}</span>
            </BioTag__Phone>
            <BioTag__DateOfBirth
              form={form}
              leftHeader="Date of Birth"
              rightHeader="Edit Date of Birth"
              headerTitle="Date of Birth"
              headerContent="Select your date of birth"
              label="Date of Birth"
              name="birthday"
              type="date"
              refs={register('birthday')}
              setValue={setValue}
              value={values.birthday}
            >
              <span>{dayjs(values.birthday).format('DD/MM/YYYY')}</span>
            </BioTag__DateOfBirth>

            <div className={styles.linkedAccount}>
              <header className={styles.linkedAccount__header}>
                <div className={styles.linkedAccount_col}>
                  <h3>Linked Accounts</h3>
                </div>
              </header>
              <div className={styles.linkedAccount_list}>
                <LinkedAccountsList />
              </div>
              <Divider />
            </div>
            <BioTag__Skill
              form={form}
              leftHeader="Skills"
              rightHeader="Edit Skills"
              headerTitle="Skills"
              headerContent="Select your skills"
              label="Skills"
              name="skill"
              type="date"
              setValue={setValue}
              refs={register('skill')}
              value={values.skill}
            >
              <span>{values.skill.join(', ')}</span>
            </BioTag__Skill>

            <BioTag__Certificate
              form={form}
              leftHeader="Certification"
              rightHeader="Edit Certification"
              headerTitle="Certification"
              headerContent="Select your Certification"
              label="Certification"
              name="certification"
              type=""
              setValue={setValue}
              refs={register('certification')}
              value={values.certification}
            >
              <span>{values.certification.join(', ')}</span>
            </BioTag__Certificate>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile__Bio;
