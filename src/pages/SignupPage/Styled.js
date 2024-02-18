import styled from 'styled-components';
import imgDesktop from '../../images/welcomeDesk@1x.jpg';
import blurDobleSercle from '../../images/BackgroundImages/blurDobleSircle.png';
import blurSmallSercle from '../../images/BackgroundImages/blurSmallSircle.png';

export const StyledSigninPage = styled.div`
  padding-top: 220px;
  background-image: url(${blurDobleSercle}), url(${blurSmallSercle}),
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
