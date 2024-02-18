import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledSignForm } from './Styled';

const RedirectLink = ({ link, title }) => {
  return (
    <StyledSignForm>
      <NavLink className="redirectLink" to={link}>
        {title}
      </NavLink>
    </StyledSignForm>
  );
};

export default RedirectLink;
