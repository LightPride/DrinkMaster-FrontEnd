import styled from 'styled-components';

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
    z-index: 100;
    @media screen and (min-width: 768px) {
      top: 87px;
  }
  `}
`;

export const Gradient = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 320px;
  background: var(--gradient-color, rgba(188, 230, 210, 0.3));
  filter: blur(130px);
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;
