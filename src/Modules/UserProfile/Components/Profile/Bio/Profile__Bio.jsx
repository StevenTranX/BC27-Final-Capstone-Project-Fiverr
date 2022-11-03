import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Divider } from '@mui/material';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import BioTags from '../../../../../ReusableComponents/Profile__Bio/BioTags/BioTags';
import BioTag__Certificate from '../../../../../ReusableComponents/Profile__Bio/BioTags/BioTag__Certificate';
import BioTag__DateOfBirth from '../../../../../ReusableComponents/Profile__Bio/BioTags/BioTag__DateOfBirth';
import BioTag__Name from '../../../../../ReusableComponents/Profile__Bio/BioTags/BioTag__Name';
import BioTag__Phone from '../../../../../ReusableComponents/Profile__Bio/BioTags/BioTag__Phone';
import BioTag__Skill from '../../../../../ReusableComponents/Profile__Bio/BioTags/BioTag__Skill';
import LinkedAccountsList from './LinkedAccountsList/LinkedAccountsList';
import styles from './Profile__Bio.module.scss';
import { getUser } from '../../../Slices/userProfileSlice';
import { useParams } from 'react-router-dom';
const Profile__Bio = (props) => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    name: yup.string().required('Please enter your username'),
    password: yup.string().required('Please enter password').min(6),
    email: yup.string().email(),
    phone: yup.string().min(10).max(10),
    birthday: yup.date(),
    skill: yup
      .array()
      .of(yup.string())
      .required('Please select at least 1 skill'),
    certification: yup.array().required('Please select certification'),
  });
  const { userId } = useParams();
  console.log(userId);
  useEffect(() => {
    dispatch(getUser(userId));
  }, [userId]);
  useEffect(() => {
    dispatch(getUser(userId));
  }, []);

  const defaultValues = {
    id: currentUser?.id,
    name: currentUser?.name,
    email: currentUser?.email,
    password: currentUser?.password,
    phone: currentUser?.phone,
    birthday: currentUser?.birthday,
    gender: currentUser?.gender,
    role: currentUser?.role,
    skill: currentUser?.skill,
    certification: currentUser?.certification,
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
    console.log(values);
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
  if (currentUser) {
    return (
      <>
        <div className={styles.cardLayout}>
          <div className={styles.cardWrapper}>
            <form onSubmit={handleSubmit(handleSubmitChild)}>
              <BioTag__Name
                form={form}
                leftHeader='Full Name'
                rightHeader='Edit Your Full Name'
                headerTitle='Name'
                headerContent=' Type to edit your name'
                label='Full Name'
                name='name'
                type='text'
                refs={register('name')}
                setValue={setValue}
              >
                <span>{values.name}</span>
              </BioTag__Name>
              <BioTag__Phone
                form={form}
                leftHeader='Phone'
                rightHeader='Edit Phone Number'
                headerTitle='Phone Number'
                headerContent=' Type to edit your phone number '
                label='Phone Number'
                name='phone'
                type='number'
                refs={register('phone')}
                setValue={setValue}
                value={values.phone}
              >
                <span>{values.phone}</span>
              </BioTag__Phone>
              <BioTag__DateOfBirth
                form={form}
                leftHeader='Date of Birth'
                rightHeader='Edit Date of Birth'
                headerTitle='Date of Birth'
                headerContent='Select your date of birth'
                label='Date of Birth'
                name='birthday'
                type='date'
                refs={register('birthday')}
                setValue={setValue}
                value={values.birthday}
              >
                <span>
                  {dayjs(values.birthday || new Date()).format('DD/MM/YYYY')}
                </span>
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
                leftHeader='Skills'
                rightHeader='Edit Skills'
                headerTitle='Skills'
                headerContent='Select your skills'
                label='Skills'
                name='skill'
                type='date'
                setValue={setValue}
                refs={register('skill')}
                value={values.skill}
              >
                <span>{values?.skill?.join(', ') || ''}</span>
              </BioTag__Skill>

              <BioTag__Certificate
                form={form}
                leftHeader='Certification'
                rightHeader='Edit Certification'
                headerTitle='Certification'
                headerContent='Select your Certification'
                label='Certification'
                name='certification'
                type=''
                setValue={setValue}
                refs={register('certification')}
                value={values.certification}
              >
                <span>{values?.certification?.join(', ') || ''}</span>
              </BioTag__Certificate>
              <BioTags>
                <Box>
                  <Button
                    type='submit'
                    sx={{
                      backgroundColor: '#1dbf73',
                      height: '45px',

                      '&:hover': {
                        backgroundColor: '#1dbf73',
                      },
                    }}
                    variant='contained'
                  >
                    Save Changes
                  </Button>
                </Box>
              </BioTags>
            </form>
          </div>
        </div>
      </>
    );
  } else {
    console.log(' currentUser not available');
    return null;
  }
};

export default Profile__Bio;
