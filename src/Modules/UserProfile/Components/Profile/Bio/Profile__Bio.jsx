import { yupResolver } from '@hookform/resolvers/yup';
import { Divider } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import BioTag__Certificate from '../../../../../ReusableComponents/Profile__Bio/BioTags/BioTag__Certificate';
import BioTag__DateOfBirth from '../../../../../ReusableComponents/Profile__Bio/BioTags/BioTag__DateOfBirth';
import BioTag__Phone from '../../../../../ReusableComponents/Profile__Bio/BioTags/BioTag__Phone';
import BioTag__Skill from '../../../../../ReusableComponents/Profile__Bio/BioTags/BioTag__Skill';
import LinkedAccountsList from './LinkedAccountsList/LinkedAccountsList';
import styles from './Profile__Bio.module.scss';
const Profile__Bio = (props) => {
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

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
      birthday: '',
      gender: true,
      role: '',
      skill: [],
      certification: [],
    },
    resolver: yupResolver(schema),
  });
  const { register, handleSubmit, setValue } = form;
  // const { isSubmitting } = form.formState;
  // const handleSubmitChild = async (values) => {
  //   const { onSubmit } = props;
  //   try {
  //     if (onSubmit) {
  //       await onSubmit(values);
  //       form.reset();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <div className={styles.cardLayout}>
        <div className={styles.cardWrapper}>
          <form>
            <BioTag__Phone
              form={form}
              leftHeader="Phone"
              rightHeader="Edit Phone Number"
              headerTitle="Phone Number"
              headerContent=" Type to edit your phone number "
              label="Phone Number"
              name="phone"
              type="number"
            />
          </form>
          <form>
            <BioTag__DateOfBirth
              form={form}
              leftHeader="Date of Birth"
              rightHeader="Edit Date of Birth"
              headerTitle="Date of Birth"
              headerContent="Select your date of birth"
              label="Date of Birth"
              name="birthday"
              type="date"
            />
          </form>

          <form>
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
          </form>
          <form>
            <BioTag__Skill
              form={form}
              leftHeader="Skills"
              rightHeader="Edit Skills"
              headerTitle="Skills"
              headerContent="Select your skills"
              label="Skills"
              name="skill"
              type="date"
              onChange={setValue}
            />
          </form>

          <form>
            <BioTag__Certificate
              form={form}
              leftHeader="Certificate"
              rightHeader="Edit Certificate"
              headerTitle="Certificate"
              headerContent="Select your certificates"
              label="Certificate"
              name="certificate"
              type=""
              onChange={setValue}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile__Bio;
