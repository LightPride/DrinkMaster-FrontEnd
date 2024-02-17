import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLogoLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
`;

export const LogoSvg = styled.svg`
  width: 22px;
  height: 22px;
  margin-right: 10px;
  fill: var(--white-color);

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
    margin-right: 14px;
  }
`;

export const LogoText = styled.p`
  color: var(--white-color);
  font-family: 'Manrope-600';
  font-size: 16px;
  line-height: 112%;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 122%;
  }
`;
