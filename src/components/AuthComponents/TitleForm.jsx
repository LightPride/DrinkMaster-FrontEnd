import React from 'react';
import { StyledSignForm } from './Styled';

const TitleForm = ({ title }) => {
  return (
    <StyledSignForm>
      <h1 className="formTitleSign">{title}</h1>
    </StyledSignForm>
  );
};

export default TitleForm;
