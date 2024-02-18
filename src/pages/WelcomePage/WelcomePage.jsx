import React from 'react';
import RedirectLink from '../../components/AuthComponents/RedirectLink';
import TitleForm from '../../components/AuthComponents/TitleForm';
import WelcomeLayout from '../../components/Layout/WelcomeLayout/WelcomeLayout';
import WelcomeDescription from '../../components/AuthComponents/WelcomeDescribtion';

const WelcomePage = () => {
  return (
    <WelcomeLayout>
      <TitleForm title={'Welcome to the app!'} />
      <WelcomeDescription />
      <RedirectLink link={'/signup'} title={'Sign Up'} />
      <RedirectLink link={'/signin'} title={'Sign In'} />
    </WelcomeLayout>
  );
};

export default WelcomePage;
