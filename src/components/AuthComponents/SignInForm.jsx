import React, { useState } from 'react';
import { StyledSignForm } from './Styled';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { loginThunk } from '../../redux/auth/auth.reducer';
import { useDispatch } from 'react-redux';
import UniversalBtn from './UniversalBtn';

import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  FormHelperText,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';

const schema = yup.object({
  email: yup
    .string()
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
      'Please, check your email address!'
    )
    .required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one digit!'
    )
    .required(),
});

const SignInForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <StyledSignForm>
      <form
        className="inputContainer"
        rules={{ required: 'Please check your name!' }}
        onSubmit={handleSubmit((data) => {
          console.log(data);
          dispatch(loginThunk(data));
        })}
      >
        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="Email"
              variant="outlined"
              className="textInput"
              error={!!errors.email?.message}
              helperText={errors.email?.message}
              required
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
              fullWidth
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

        <UniversalBtn
          margin={'14px'}
          type={'summit'}
          title={'Sign In'}
          width={'400px'}
          color={'var(--dark-blue-color)'}
          backgroundcolor={'var(--white-color)'}
          borderhover={'var(--white-fifty-color)'}
          backgroundcolorhover={'transparent'}
          colorhover={'var(--white-color)'}
        />
      </form>
    </StyledSignForm>
  );
};

export default SignInForm;