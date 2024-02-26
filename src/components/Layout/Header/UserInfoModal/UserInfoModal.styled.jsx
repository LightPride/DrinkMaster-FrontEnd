import styled from 'styled-components';
import { Field, Form } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, Box, Dialog, Button, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export const StyledForm = styled(Form)`
  position: relative;
  max-width: 335px;
  max-height: 345px;
  padding: 50px 25px;
  border-radius: 16px;
  background-color: var(--dark-blue-color);

  @media screen and (min-width: 768px) {
    min-width: 500px;
    min-height: 426px;
    padding: 50px 50px 75px 50px;
  }
`;

export const StyledAvatar = styled(Avatar)`
  min-width: 80px;
  min-height: 80px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 39px;

  @media screen and (min-width: 768px) {
    min-width: 100px;
    min-height: 100px;
    margin-bottom: 66px;
  }
`;

export const StyledBox = styled(Box)`
  position: absolute;
  width: 28px;
  height: 28px;
  margin-left: auto;
  margin-right: auto;
  top: 80%;
  left: 50.5%;
  transform: translate(-50%, 0%);
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    top: 85%;
    left: 51%;
    transform: translate(-50%, 0%);
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

export const StyledField = styled(Field)`
  width: 100%;
  font-family: 'Manrope-400';
  font-size: 14px;
  line-height: 129%;
  color: var(--white-color);
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 24px;
  border: 1px solid var(--white-fifty-color);

  background-color: var(--dark-blue-color);
  border-radius: 200px;

  ::placeholder {
    color: var(--white-color);
    font-family: 'Manrope-400';
    font-size: 14px;
    line-height: 129%;
  }

  @media screen and (min-width: 768px) {
    font-family: 'Manrope-400';
    font-size: 17px;
    line-height: 156%;
    ::placeholder {
      font-family: 'Manrope-400';
      font-size: 17px;
      line-height: 156%;
    }
  }
`;

export const StyledEditIcon = styled(EditIcon)`
  width: 16px;
  height: 16px;
  color: var(--white-color);
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const StyledLabel = styled.label`
  cursor: pointer;
`;

export const StyledDialog = styled(Dialog)`
  .css-1t1j96h-MuiPaper-root-MuiDialog-paper {
    background-color: transparent;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  display: flex;
  padding-top: 18px;
  padding-bottom: 18px;
  background-color: rgba(243, 243, 243, 0);
  border-radius: 42px;
  color: var(--white-color);
  text-decoration-line: underline;

  && {
    &:hover,
    &:focus {
      background-color: var(--white-color);
      color: var(--blue-color);
      border-radius: 42px;
      /* text-decoration-line: none; */
    }
  }
`;

export const StyledTypography = styled(Typography)`
  min-width: 100%;
  height: 55px;
  font-family: 'Manrope-600';
  font-size: 14px;
  line-height: 129%;
  border: 1px solid var(--white-fifty-color);
  color: var(--dark-blue-color);
  background-color: var(--white-color);
  border-radius: 42px;
  text-transform: none;
  padding-top: 14px;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
`;

export const TypographyError = styled(Typography)`
  margin-left: 24px;
  margin-bottom: 0;
  color: var(--errorred-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;
export const TypographySuccess = styled(Typography)`
  margin-left: 24px;
  margin-bottom: 0;
  color: var(--successgren-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;
