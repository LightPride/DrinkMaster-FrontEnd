import { useDispatch } from 'react-redux';
import { ButtonSubmit, FormContainer, Title } from './Subscribe.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { subscribeEmail } from '../../../../redux/user/userOperations';

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = "Обов'язкове поле";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    error = 'Невірний формат електронної пошти';
  }
  return error;
};

export const Subscribe = () => {
  const dispatch = useDispatch();

  const handleSubmit = async ({ email }, { resetForm, setSubmitting }) => {
    try {
      dispatch(subscribeEmail(email));
    } catch (err) {
      console.log('error: ' + err);
    }
    resetForm();
    setSubmitting(false);
  };
  return (
    <Formik initialValues={{ email: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <FormContainer>
            <Title>
              Subscribe up to our newsletter. Be in touch with latest news and
              special offers, etc.
            </Title>
            <label className="labelEmail">
              <Field
                className={`InputNameEmail ${
                  errors.email && touched.email && 'InputNameEmailError'
                }`}
                placeholder="Enter the email"
                validate={validateEmail}
                type="email"
                name="email"
              />
              {errors.email && touched.email && (
                <ErrorMessage
                  name="email"
                  component="div"
                  className="errorMessage"
                />
              )}
            </label>

            <ButtonSubmit disabled={isSubmitting} type="submit">
              Subscribe
            </ButtonSubmit>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default Subscribe;
