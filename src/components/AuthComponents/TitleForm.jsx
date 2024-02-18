import React from 'react';
import { StyledSignUpForm } from './Styled';

const TitleForm = ({ title }) => {
  return (
    <StyledSignUpForm>
      <h1 className="formTitleSign">{title}</h1>
    </StyledSignUpForm>
  );
};

export default TitleForm;
