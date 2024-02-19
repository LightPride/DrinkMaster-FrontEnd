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
  background-image: url(${dobleCircle}), url(${circle}), url(${bgMobile});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    top -200px right,
    bottom -300px left 300px,
    center right -300px;
  background-size:
    auto auto,
    auto auto,
    auto 100%;
  padding: 0 20px;
  max-width: 100vw;
  height: 100vh;
  color: var(--start-page-txt-color);

  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-image: url(${dobleCircle}), url(${circle}), url(${bgTablet});
    background-position:
      top -300px left -500px,
      bottom -200px right -600px,
      center right -250px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${dobleCircle}), url(${circle}), url(${bgDesktop});
    background-position:
      top -300px left -500px,
      bottom -400px right -500px,
      center right;
    padding: 0 100px;
  }
`;
