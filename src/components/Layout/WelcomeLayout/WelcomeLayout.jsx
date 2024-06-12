import { StyledWelcomeLayout } from './WelcomeLayout.styled';
import { StyleSheetManager } from 'styled-components';

const WelcomeLayout = ({ children }) => {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'backgroundcolor'}>
      <StyledWelcomeLayout>{children}</StyledWelcomeLayout>
    </StyleSheetManager>
  );
};

export default WelcomeLayout;
