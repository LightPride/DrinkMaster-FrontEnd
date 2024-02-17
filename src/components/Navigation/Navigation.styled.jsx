import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationWrap = styled.nav`
  display: inline-flex;

  align-items: center;
  gap: 16px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    margin-left: 224px;
    margin-right: 191px;
  }
`;

export const StyledNavigationLink = styled(NavLink)`
  color: #f3f3f3;
  background: #0a0a11;
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 8px 16px;
  border-radius: 40px;
  transition: background 0.25s;
  /* overflow: hidden; */
  &:hover {
    background: rgba(243, 243, 243, 0.8);
    color: #0a0a11;
  }
  &.active {
    background: #161f37;
    color: rgba(243, 243, 243, 0.8);
  }
`;
