import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

export const StyledLogOutWrapper = styled.div`
  display: block;
  text-align: center;
  width: 500px;
  padding: 50px;
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: var(--dark-blue-color);
  transform: translate(-50%, -50%);
  z-index: 200;
  color: var(--white-color);
  border-radius: 16px;
  @media screen and (max-width: 768px) {
    width: 400px;
    padding: 30px;
  }
  @media screen and (max-width: 420px) {
    width: 350px;
    padding: 15px;
  }
`;

export const StyledButtonsWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const StyledPar = styled.p`
  color: var(--white-color);
`;

export const LogOutModalBtn = styled.button`
  width: 190px;
  height: 44px;
  padding-left: 45px;
  padding-right: 45px;
  text-align: center;
  font-family: 'Manrope-600', sans-serif;
  color: var(--dark-blue-color);
  background-color: var(--white-color);
  font-size: 16px;
  line-height: 112%;
  border: 1px solid var(--white-color);
  border-radius: 22px;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: var(--white-color);
    background-color: var(--dark-blue-color);
    border-color: var(--white-twenty-color);
  }
  &:active {
    border-color: var(--whitefifty-color);
  }
  @media screen and (max-width: 768px) {
    gap: 5px;
  }
`;

export const CloseModalBtn = styled.button`
  width: 190px;
  height: 44px;
  padding-left: 45px;
  padding-right: 45px;
  text-align: center;
  font-family: 'Manrope-600', sans-serif;
  color: var(--white-color);
  background-color: var(--grey-color);
  font-size: 16px;
  line-height: 112%;
  border: 1px solid var(--grey-color);
  border-radius: 22px;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: var(--white-color);
    background-color: var(--dark-blue-color);
    border-color: var(--white-twenty-color);
  }
  &:active {
    border-color: var(--whitefifty-color);
  }
  @media screen and (max-width: 768px) {
    gap: 5px;
  }
`;

export const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 24px;
  height: 24px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    top: 18px;
    right: 18px;
  }
`;
