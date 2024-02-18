import React from 'react';
import { StyledWelcomeLayout } from '../../components/Layout/WelcomeLayout/Styled';
import TitleForm from '../../components/AuthComponents/TitleForm';
import SignInForm from '../../components/AuthComponents/SignInForm';

const SigninPage = () => {
  return (
    <StyledWelcomeLayout>
      <TitleForm title={'Sign In'} />
      <SignInForm />
    </StyledWelcomeLayout>
  );
};

export default SigninPage;
