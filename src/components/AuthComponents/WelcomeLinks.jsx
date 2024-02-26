import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledWelcomeNavLinks } from './Styled';

const WelcomeLinks = () => {
  return (
    <StyledWelcomeNavLinks>
      <NavLink className="whiteBtn" to={'/signup'}>
        Sign Up
      </NavLink>
      <NavLink className="darkBtn" to={'/signin'}>
        Sign In
      </NavLink>
    </StyledWelcomeNavLinks>
  );
};

export default WelcomeLinks;
