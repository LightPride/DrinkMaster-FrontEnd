import React from 'react';
import { StyledSigninPage } from './Styled';

const SigninPage = () => {
  return (
    <StyledSigninPage>
      <h1>Sign In</h1>
      <div>
        <form className="inputContainer" action="">
          <input type="email" />
          <input type="password" />
          <button type="submit"></button>
        </form>
      </div>
    </StyledSigninPage>
  );
};

export default SigninPage;
