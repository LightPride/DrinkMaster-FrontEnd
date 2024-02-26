import { styled } from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 335px;

  @media screen and (min-width: 768px) {
    max-width: 309px;
  }

  @media screen and (min-width: 1440px) {
  }
  .InputNameEmail {
    padding-left: 24px;

    border: 1px solid rgba(243, 243, 243, 0.2);
    border-radius: 200px;
    width: 100%;
    max-width: 335px;
    height: 54px;

    background-color: transparent;

    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.28571;
    text-align: start;
    color: #f3f3f3;

    &:hover {
      border: 1px solid rgba(243, 243, 243, 0.5);
    }
    &:focus {
      border: 1px solid rgba(243, 243, 243, 0.5);
    }

    @media screen and (min-width: 768px) {
      font-size: 17px;

      line-height: 1.56;

      color: #f3f3f3;
      width: 309px;
    }
  }
  .errorMessage {
    color: red;
    position: absolute;
    font-style: italic;
    font-size: small;
    right: 10%;
    bottom: 0;
  }
  .labelEmail {
    width: 100%;
    position: relative;
  }
  .InputNameEmailError {
    border-color: #ff0000a0;
  }
`;

export const Title = styled.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;

  line-height: 1.42857;
  color: #f3f3f3;

  @media (min-width: 768px) {
    font-size: 18px;

    line-height: 1.33333;
  }
`;

export const ButtonSubmit = styled.button`
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 200px;
  width: 100%;
  max-width: 335px;
  height: 54px;

  background-color: transparent;

  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.125;
  text-align: center;
  color: #f3f3f3;

  &:hover {
    background-color: #f3f3f3;
    color: #161f37;
  }
  &:focus {
    background-color: #f3f3f3;
    color: #161f37;
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56;
    width: 309px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
