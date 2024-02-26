import dayjs from 'dayjs';
import * as yup from 'yup';

const signUpSchema = yup.object({
  name: yup.string().min(3, 'Please put down more than 3 letters!').required(),
  dateOfBirth: yup
    .string()
    .test(
      'is-future-date',
      'Date of birth cannot be in the future',
      function (value) {
        const inputDate = dayjs(value, 'YYYY-MM-DD');
        const currentDate = dayjs();

        return inputDate.isValid() && inputDate.isBefore(currentDate);
      }
    )
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

export { signUpSchema };
