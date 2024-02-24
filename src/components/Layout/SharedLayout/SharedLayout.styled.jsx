import { createGlobalStyle, styled } from 'styled-components';
import bgMobile from '../../../images/BackgroundImages/bgMobile.png';
import bgTablet from '../../../images/BackgroundImages/bgTablet.png';
import bgDesktop from '../../../images/BackgroundImages/bgDesktop.png';
import circle2 from '../../../images/BackgroundImages/circle2.png';
import circle from '../../../images/BackgroundImages/circle.png';
import dobleCircle from '../../../images/BackgroundImages/dobleCircle.png';
import circleFooter from '../../../images/BackgroundImages/circleFooter.png';

export const StyledBackground = createGlobalStyle`
  .welcomeBackground {
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

    @media screen and (min-width: 768px) {
      background-image: url(${dobleCircle}), url(${circle}), url(${bgTablet});
      background-position:
        top -300px left -500px,
        bottom -200px right -600px,
        center right -250px;
    }
    @media screen and (min-width: 1440px) {
      background-image: url(${dobleCircle}), url(${circle}), url(${bgDesktop});
      background-position:
        top -300px left -500px,
        bottom -400px right -500px,
        center right;
    }
  }

  .mainBackground {
    background-image: url(${circle}), url(${circle}), url(${circleFooter});
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-position:
      top -100px left -700px,
      top 300px right -700px,
      bottom -850px left -700px;
    background-size:
      auto auto,
      auto auto,
      auto auto;

    @media screen and (min-width: 768px) {
      background-image: url(${circle}), url(${circle}), url(${circle2}),
        url(${circleFooter}), url(${circle});
      background-position:
        top -100px left -650px,
        top 300px right -500px,
        top 300px right -100px,
        bottom -850px left,
        bottom -650px right;
    }
    @media screen and (min-width: 1440px) {
      background-image: url(${circle}), url(${circle}), url(${circle2}),
        url(${circleFooter}), url(${circle});
      background-position:
        top -100px left -500px,
        top 300px right -500px,
        top 300px right,
        bottom -850px left 250px,
        bottom -650px right 250px;
    }
  }
`;

export const StyledMain = styled.main`
  min-height: calc(100vh - 85px);
`;
