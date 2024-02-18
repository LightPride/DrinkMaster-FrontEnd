import React from 'react';
import TitleForm from '../../components/AuthComponents/TitleForm';
import SignInForm from '../../components/AuthComponents/SignInForm';
import RedirectLink from '../../components/AuthComponents/RedirectLink';
import WelcomeLayout from '../../components/Layout/WelcomeLayout/WelcomeLayout';

const SigninPage = () => {
  return (
    <WelcomeLayout>
      <TitleForm title={'Sign In'} />
      <SignInForm />
      <RedirectLink link={'/signup'} title={'Sign Up'} />
    </WelcomeLayout>
  );
};

export default SigninPage;
