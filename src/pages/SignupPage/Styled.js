import styled from 'styled-components';
import imgDesktop from '../../images/welcomeDesk@1x.jpg';
import blurDobleDesctop1x from '../../images/BackgroundImages/blurDobleDesctop1x.png';
import blurSmallDesktop from '../../images/BackgroundImages/blurSmallDecktop1x.png';

export const StyledSigninPage = styled.div`
  padding-top: 220px;
  background-image: url(${blurDobleDesctop1x}), url(${blurSmallDesktop}),
    url(${imgDesktop});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    top -50px left -80px,
    bottom right,
    center right;
  width: 100%;
  height: 770px;
  color: var(--start-page-txt-color);
`;
