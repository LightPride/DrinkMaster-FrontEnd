import React from 'react';
import SignUpForm from '../../components/AuthComponents/SignUpForm';
import TitleForm from '../../components/AuthComponents/TitleForm';
import RedirectLink from '../../components/AuthComponents/RedirectLink';
import WelcomeLayout from '../../components/Layout/WelcomeLayout/WelcomeLayout';

const SignupPage = () => {
  return (
    <WelcomeLayout>
      <TitleForm title={'Sign Up'} />
      <SignUpForm />
      <RedirectLink link={'/signin'} title={'Sign In'} />
    </WelcomeLayout>
  );
};

export default SignupPage;
