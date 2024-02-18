import React from 'react';
import { StyledWelcomeLayout } from '../../components/Layout/WelcomeLayout/Styled';
import TitleForm from '../../components/AuthComponents/TitleForm';

const SigninPage = () => {
  return (
    <StyledWelcomeLayout>
      <TitleForm title={'Sign In'} />
    </StyledWelcomeLayout>
  );
};

export default SigninPage;
