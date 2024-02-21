import styled from 'styled-components';
import bgMobile from '../../../images/BackgroundImages/bgMobile.png';
import bgTablet from '../../../images/BackgroundImages/bgTablet.png';
import bgDesktop from '../../../images/BackgroundImages/bgDesktop.png';
import circle from '../../../images/BackgroundImages/circle.png';
import dobleCircle from '../../../images/BackgroundImages/dobleCircle.png';

export const StyledWelcomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  max-width: 100vw;
  height: 100vh;
  color: var(--start-page-txt-color);

  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 100px;
  }
`;
