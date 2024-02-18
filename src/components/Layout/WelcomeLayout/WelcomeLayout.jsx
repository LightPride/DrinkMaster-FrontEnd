import React from 'react';
import { StyledWelcomeLayout } from './Styled';
import { StyleSheetManager } from 'styled-components';

const WelcomeLayout = ({ children }) => {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'backgroundcolor'}>
      <StyledWelcomeLayout>{children}</StyledWelcomeLayout>;
    </StyleSheetManager>
  );
};

export default WelcomeLayout;
