import React from 'react';
import WelcomeLayout from '../../components/Layout/WelcomeLayout/WelcomeLayout';
import TitleForm from '../../components/AuthComponents/TitleForm';

const WelcomePage = () => {
  return (
    <WelcomeLayout>
      <TitleForm title={'Welcome to the app!'} />
    </WelcomeLayout>
  );
};

export default WelcomePage;
