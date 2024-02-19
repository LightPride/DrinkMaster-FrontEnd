import React from 'react';
// import { NavLink } from 'react-router-dom';
import { StyledSignForm } from './Styled';
import { StyledRedirectLink } from './Styled';

const RedirectLink = ({ link, title }) => {
  return (
    <StyledSignForm>
      <StyledRedirectLink to={link}>{title}</StyledRedirectLink>
    </StyledSignForm>
  );
};

export default RedirectLink;
