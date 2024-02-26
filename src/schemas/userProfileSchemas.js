import * as Yup from 'yup';

export const userProfileSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Please put down more than 2 letters!')
    .max(50, 'The length should be less than 50 characters')
    .trim()
    .required('The field is required'),
});
