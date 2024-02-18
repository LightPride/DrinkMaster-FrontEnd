import React, { useState } from 'react';
import { StyledSignForm } from './Styled';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { InputLabel, OutlinedInput, TextField } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/auth.reducer';

const schema = yup.object({
  name: yup.string().min(3, 'Please put down more than 3 letters!').required(),
  dateOfBirth: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Date must to be as an example dd/mm/yyyy!')
    .required(),
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

const SignUpForm = () => {
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
          dispatch(registerThunk(data));
        })}
      >
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
            <FormControl variant="outlined" required className="textInput">
              <InputLabel htmlFor="outlined-adornment-date">
                yyyy/mm/dd
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-date"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton className="iconInput" edge="end">
                      <CalendarTodayIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label="dd/mm/yyyy"
                error={!!errors.dateOfBirth?.message}
                helperText={errors.dateOfBirth?.message}
                {...field}
              />
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
            <FormControl variant="outlined" required className="textInput">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
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
                error={!!errors.password?.message}
                helperText={errors.password?.message}
                {...field}
              />
            </FormControl>
          )}
        />

        <button type="submit">Sign Up</button>
      </form>
    </StyledSignForm>
  );
};

export default SignUpForm;