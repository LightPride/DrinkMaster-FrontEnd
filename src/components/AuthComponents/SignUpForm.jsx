import React, { useState } from 'react';
import { StyledSignForm } from './Styled';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from '../../redux/auth/auth.operations';

import { yupResolver } from '@hookform/resolvers/yup';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import {
  FormHelperText,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import UniversalBtn from './UniversalBtn';

import { signUpSchema } from '../../schemas/authSchemas';
import { Notify } from 'notiflix';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const error = useSelector((state) => state.auth.error);
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        data.dateOfBirth = dayjs(data.dateOfBirth).format('YYYY-MM-DD');
        dispatch(registerThunk(data))
          .then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
              return Notify.success(
                'Your account has been successfully created!'
              );
            }
            return Notify.failure(
              `Your request has been rejected, please try again!`
            );
          })
          .catch((error) => {
            console.log(error);
          });
      })}
    >
      <StyledSignForm>
        <Controller
          control={control}
          name="name"
          defaultValue=""
          render={({ field }) => (
            <TextField
              className="textInput"
              label="Name"
              variant="outlined"
              required
              error={!!errors.name?.message}
              helperText={errors.name?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="dateOfBirth"
          defaultValue={dayjs('1999-12-31')}
          render={({ field }) => (
            <FormControl
              variant="outlined"
              required
              className="textInput"
              error={!!errors?.dateOfBirth}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  // label="mm/dd/yyyy"
                  onChange={(date) => setValue('dateOfBirth', date)}
                  {...field}
                />
              </LocalizationProvider>

              {errors?.dateOfBirth && (
                <FormHelperText>{errors.dateOfBirth.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />

        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="Email"
              variant="outlined"
              className="textInput"
              required
              error={!!errors.email?.message}
              helperText={errors.email?.message}
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          defaultValue=""
          render={({ field }) => (
            <FormControl
              variant="outlined"
              required
              className="textInput"
              error={!!errors?.password}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                className="textInput"
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                {...field}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      className="iconInput"
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              {errors?.password && (
                <FormHelperText>{errors.password.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />
      </StyledSignForm>
      <UniversalBtn
        type={'summit'}
        title={'Sign Up'}
        width={'400px'}
        color={'var(--dark-blue-color)'}
        backgroundcolor={'var(--white-color)'}
        margin={'14px'}
        borderhover={'var(--white-fifty-color)'}
        backgroundcolorhover={'transparent'}
        colorhover={'var(--white-color)'}
      />
    </form>
  );
};

export default SignUpForm;
