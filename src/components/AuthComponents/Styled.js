import styled from 'styled-components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { NavLink } from 'react-router-dom';

export const StyledSignForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 28px;

  .textInput {
    max-width: 335px;
    width: 100%;
  }

  .textInput button {
    color: var(--white-color);
  }

  .textInput fieldset {
    border-radius: 40px;
    border-color: var(--white-fifty-color);
  }

  .textInput input {
    color: var(--white-color);
  }

  .textInput label {
    color: var(--white-fifty-color);
  }

  .textInput:hover fieldset {
    border-color: var(--white-color);
  }

  .textInput:hover fieldset:focus {
    border-color: var(--white-color);
  }
  var( --white-color) .textInput input::placeholder {
    color: var(--white-color);
  }

  .iconInput {
    color: var(--white-color);
  }

  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    box-shadow: 0 0 0 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: var(--white-color);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    .textInput {
      max-width: 400px;
    }
  }

  .valid {
    border-color: green !important;
  }

  .invalid {
    border-color: red !important;
  }
`;

export const StyledWelcomeDescription = styled.p`
  font-size: 14px;
  text-align: center;
  font-weight: 400;
  color: var(--white-color);
  max-width: 485px;
  letter-spacing: -2%;
  line-height: 18px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const StyledRedirectLink = styled(NavLink)`
  && {
    display: block;
    font-size: 14px;
    line-height: 16px;
    color: var(--white-color);
    font-weight: 600;
    max-width: 335px;
    width: 100%;
    text-align: center;
    padding: 18px 0px;
  }

  @media screen and (min-width: 768px) {
    && {
      font-size: 14px;
      max-width: 400px;
    }
  }
`;

export const StyledTitle = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -2%;
  margin-bottom: ${(props) => props.margin};
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }
`;
export const StyledTitleWelcome = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -2%;
  margin-bottom: 14px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    text-align: start;
    font-size: 40px;
    line-height: 44px;
  }
`;

export const StyledUniversalBtn = styled.button`
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.color};
  max-width: 335px;
  width: 100%;
  padding: 18px 0px;
  border-radius: 40px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  border: 1px solid ${(props) => props.backgroundcolor};

  &:hover,
  &:focus {
    background-color: ${(props) => props.backgroundcolorhover};
    border: 1px solid ${(props) => props.bordercover};
    color: ${(props) => props.colorhover};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    max-width: 400px;
  }
`;

export const StyledWelcomeNavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  align-items: center;
  flex-wrap: wrap;

  .whiteBtn, .darkBtn {
    display: block;
    padding: 14px 0px;
    width: 125px;
    border-radius: 40px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
  }

  .whiteBtn {
     border: 1px solid var(--white-color);
    color: var(--dark-blue-color);
    background-color: var(--white-color);
  }

  .darkBtn {
     border: 1px solid var(--white-fifty-color);
    color: var(--white-color);
  }

  .whiteBtn:hover, 
  .whiteBtn:focus {
    border: 1px solid var(--white-fifty-color);
    color: var(--white-color);
    background-color: transparent;
  }

  .darkBtn:hover,
  .darkBtn:focus {
    background-color: var(--white-color);
    color: var(--dark-blue-color);
  }

  @media screen and (min-width: 768px) {
      justify-content: flex-start;
    a {
      font-size: 16px;
      width: 140px;
    }

    @media screen and (min-width: 1440px) {
    a {
      font-size: 16px;
      width: 147px;
    }
  }
`;
