import React from 'react';
import { StyledWelcomeLayout } from '../../components/Layout/WelcomeLayout/Styled';
import TitleForm from '../../components/AuthComponents/TitleForm';
import SignInForm from '../../components/AuthComponents/SignInForm';
import RedirectLink from '../../components/AuthComponents/RedirectLink';

const SigninPage = () => {
  return (
    <StyledWelcomeLayout>
      <TitleForm title={'Sign In'} />
      <SignInForm />
      <RedirectLink link={'/signup'} title={'Sign Up'} />
    </StyledWelcomeLayout>
  );
};

export default SigninPage;
