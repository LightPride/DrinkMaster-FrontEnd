import React from 'react';
import { StyledTitle } from './Styled';

const TitleForm = ({ margin, title }) => {
  return <StyledTitle margin={margin}>{title}</StyledTitle>;
};

export default TitleForm;
