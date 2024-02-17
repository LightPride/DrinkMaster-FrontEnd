import React from 'react';
import { StyledSignupPage } from './Styled';

const SigninPage = () => {
  return (
    <StyledSignupPage>
      <h1>Sign Up</h1>
      <div>
        <form className="inputContainer" action="">
          <input type="text" />
          <input type="number" />
          <input type="email" />
          <input type="password" />
          <button type="submit"></button>
        </form>
      </div>
    </StyledSignupPage>
  );
};

export default SignupPage;
