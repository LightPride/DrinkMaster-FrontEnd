import React from 'react';
import SignUpForm from '../../components/AuthComponents/SignUpForm';
import { StyledWelcomeLayout } from '../../components/Layout/WelcomeLayout/Styled';
import TitleForm from '../../components/AuthComponents/TitleForm';
import RedirectLink from '../../components/AuthComponents/RedirectLink';

const SignupPage = () => {
  return (
    <StyledWelcomeLayout>
      <TitleForm title={'Sign Up'} />
      <SignUpForm />
      <RedirectLink link={'/signin'} title={'Sign In'} />
    </StyledWelcomeLayout>
  );
};

export default SignupPage;
