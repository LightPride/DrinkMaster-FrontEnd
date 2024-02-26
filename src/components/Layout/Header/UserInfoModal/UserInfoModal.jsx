import { Box } from '@mui/material';
import { Notify } from 'notiflix';
import { Field, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../../redux/auth/auth.selectors';
import { updateUser } from '../../../../redux/user/userOperations';

import { SkeletonAuth } from '../Skeleton/SkeletonAuth';
import {
  StyledDialog,
  StyledForm,
  StyledCloseIcon,
  StyledAvatar,
  StyledBox,
  StyledLabel,
  StyledField,
  StyledEditIcon,
  StyledButton,
  StyledTypography,
  TypographyError,
  TypographySuccess,
} from './UserInfoModal.styled';

import addPhoto from '../../../../images/addPhoto.svg';
import { userProfileSchema } from '../../../../schemas/userProfileSchemas';

export const UserInfoModal = ({ isOpen, handleClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { name, avatarURL } = useSelector(selectUser);
  const [avatar, setAvatar] = useState('');
  const [fileAvatar, setFileAvatar] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (avatarURL) {
      setAvatar(avatarURL);
    }
  }, [avatarURL]);

  const handleChangeAvatar = ({ target }) => {
    const file = target.files[0];
    const maxSizeFile = 5 * 1024 * 1024;
    if (file.size > maxSizeFile) {
      Notify.failure('The file must be less than 5MB', {
        position: 'center-top',
        distance: '10px',
      });
      setFileAvatar('');
      return;
    }
    setFileAvatar(file);
    const objectURL = URL.createObjectURL(file);
    setAvatar(objectURL);
  };

  const handleSubmit = (values, { resetForm }) => {
    const formData = new FormData();

    formData.append('avatar', fileAvatar);
    formData.append('name', values.name);

    try {
      setIsLoading(true);
      dispatch(updateUser(formData));
      setIsLoading(false);

      resetForm();
      handleClose();
    } catch (error) {
      console.log('Submit error', error.message);
    }
    resetForm();
  };

  const initialValues = {
    name,
  };

  return (
    <StyledDialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="profile"
      sx={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
    >
      {isLoading ? (
        <SkeletonAuth totalRow={4} />
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={userProfileSchema}
        >
          {({ errors, touched }) => (
            <StyledForm>
              <>
                <StyledCloseIcon
                  onClick={handleClose}
                  sx={{ cursor: 'pointer' }}
                />
                <Box sx={{ position: 'relative' }}>
                  <StyledAvatar id="profile" alt="avatar" src={avatar} />
                  <StyledBox>
                    <Field
                      name="file"
                      type="file"
                      id="loadFile"
                      hidden
                      onChange={handleChangeAvatar}
                    ></Field>
                    <StyledLabel htmlFor="loadFile" role="button">
                      <img
                        src={addPhoto}
                        alt="add avatar"
                        width="28"
                        height="28"
                      />
                    </StyledLabel>
                  </StyledBox>
                </Box>

                <Box sx={{ position: 'relative' }}>
                  <StyledField placeholder={initialValues.name} name="name" />
                  <StyledEditIcon />
                </Box>
                {errors.name && touched.name ? (
                  <TypographyError sx={{ marginTop: 1 }}>
                    {errors.name}
                  </TypographyError>
                ) : null}
                {touched.name && !errors.name ? (
                  <TypographySuccess color="#3CBC81" sx={{ marginTop: 1 }}>
                    This is an CORRECT name
                  </TypographySuccess>
                ) : null}

                <StyledButton type="submit" sx={{ marginTop: '18px' }}>
                  <StyledTypography>Save changes</StyledTypography>
                </StyledButton>
              </>
            </StyledForm>
          )}
        </Formik>
      )}
    </StyledDialog>
  );
};
