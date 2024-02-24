import styled from 'styled-components';
import { Typography } from '@mui/material';

export const StyledPopupWindow = styled.div`
  position: absolute;
  display: block;
  width: 177px;
  padding: 18px;
  z-index: 101;
  background-color: var(--dark-blue-color);
  border-radius: 8px;

  top: 81px;
  left: 50%;
  @media screen and (min-width: 768px) {
    top: 87px;
    left: 68.4%;
    transform: translateX(-50%);
  }
  @media screen and (min-width: 1440px) {
    top: 86px;
    left: 70.8%;
  }
`;

export const LogOutBtn = styled.button`
  font-family: 'Manrope-600', sans-serif;
  color: var(--dark-blue-color);
  font-size: 14px;
  line-height: 129%;
  border: 1px solid var(--white-color);
  background-color: var(--white-color);
  width: 141px;
  height: 42px;

  border: 1px solid var(--white-color);
  border-radius: 42px;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: var(--white-color);
    background-color: var(--dark-blue-color);
    border-color: var(--white-twenty-color);
  }
  &:active {
    color: var(--white-twenty-color);
  }
`;

export const StyledTypography = styled(Typography)`
  font-family: 'Manrope-600', sans-serif;
  color: var(--white-color);
  font-size: 14px;
  line-height: 129%;
`;
