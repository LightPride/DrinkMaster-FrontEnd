import React from 'react';
import TitleForm from '../../components/AuthComponents/TitleForm';
import WelcomeLayout from '../../components/Layout/WelcomeLayout/WelcomeLayout';
import WelcomeDescription from '../../components/AuthComponents/WelcomeDescribtion';
import WelcomeLinks from '../../components/AuthComponents/WelcomeLinks';

const WelcomePage = () => {
  return (
    <WelcomeLayout>
      <TitleForm margin={'14px'} title={'Welcome to the app!'} />
      <WelcomeDescription />
      <WelcomeLinks />
    </WelcomeLayout>
  );
};

export default WelcomePage;
