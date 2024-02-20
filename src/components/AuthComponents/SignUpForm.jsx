import React, { useState } from 'react';
import { StyledSignForm } from './Styled';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/auth.reducer';

import { yupResolver } from '@hookform/resolvers/yup';
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
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import UniversalBtn from './UniversalBtn';

import { signUpSchema } from '../../schemas/authSchemas';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    control,
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
        console.log(data);
        dispatch(registerThunk(data));
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
          defaultValue=""
          render={({ field }) => (
            <FormControl
              variant="outlined"
              required
              className="textInput"
              error={!!errors?.dateOfBirth}
            >
              <InputLabel htmlFor="outlined-adornment-date">
                yyyy-mm-dd
              </InputLabel>
              <OutlinedInput
                className="textInput"
                id="outlined-adornment-date"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton className="iconInput" edge="end">
                      <CalendarTodayIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label="dd/mm/yyyy"
                {...field}
              />
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
