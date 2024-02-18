import React from 'react';
import SignUpForm from '../../components/AuthComponents/SignUpForm';
import { StyledWelcomeLayout } from '../../components/Layout/WelcomeLayout/Styled';
import TitleForm from '../../components/AuthComponents/TitleForm';

const SignupPage = () => {
  return (
    <StyledWelcomeLayout>
      <TitleForm title={'Sign Up'} />
      <SignUpForm />
    </StyledWelcomeLayout>
  );
};

export default SignupPage;
