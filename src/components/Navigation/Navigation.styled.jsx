import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationWrap = styled.nav`
  display: flex;
  align-items: center;

  gap: 16px;
  @media screen and (min-width: 1280px) {
    margin-left: 224px;
    margin-right: 191px;
  }
`;

export const StyledNavigationLink = styled(NavLink)`
  font-family: 'Manrope-500';
  color: var(--white-color);
  font-size: 14px;
  line-height: 143%;
  border: 1px solid var(--white-twenty-color);
  border-radius: 40px;
  background: var(--black-color);
  padding: 8px 16px;
  transition: all 0.25s ease-in-out;

  &:hover,
  &:focus {
    color: var(--black-color);
    background: var(--white-color);
  }
  &.active {
    border-color: var(--dark-blue-color);
    background: var(--dark-blue-color);
    color: var(--white-color);
  }
`;
