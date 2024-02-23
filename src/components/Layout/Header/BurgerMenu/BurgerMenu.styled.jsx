import styled from 'styled-components';
import circle2 from '../../../../images/BackgroundImages/circle2.png';
import circle from '../../../../images/BackgroundImages/circle.png';

export const BurgerContainer = styled.div`
  position: relative;
  z-index: 100;
`;

export const MenuItems = styled.ul`
  display: none;
  ${({ open }) =>
    open &&
    `
    display: block;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 83px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--black-color);
     background-image: url(${circle2}), url(${circle});
  background-repeat: no-repeat, no-repeat;
  background-position:
    top -150px left -150px,
    top -100px left -600px;
  background-size:
    auto auto,
    auto auto;
    z-index: 100;
    @media screen and (min-width: 768px) {
        background-position:
    top -100px left -400px,
    bottom right -600px;
      top: 87px;
  }
  `}
`;

export const IconSvg = styled.svg`
  width: 32px;
  height: 32px;
  fill: var(--white-color);

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
  }
`;
