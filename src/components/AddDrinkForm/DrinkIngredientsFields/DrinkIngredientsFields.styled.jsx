import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`;

export const SubtitleForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h4 {
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 28px;
    line-height: 1.14286;
    color: #f3f3f3;
    @media screen and (min-width: 768px) {
      font-size: 40px;
      line-height: 1.1;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 16px;
    border: 1px solid rgba(243, 243, 243, 0.5);
    border-radius: 200px;
    width: 104px;
    height: 38px;
    opacity: 0.8;
    @media screen and (min-width: 768px) {
      gap: 18px;
      width: 114px;
      height: 44px;
    }
  }
  p {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.56;
    text-align: center;
    color: #f3f3f3;
    @media screen and (min-width: 768px) {
      font-size: 17px;
    }
  }
`;

export const IngredientsButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  select {
    background-color: transparent;
    border: 1px solid rgba(243, 243, 243, 0.5);
    border-radius: 200px;
    width: 200px;
    height: 50px;
    opacity: 0.8;
    margin-right: 8px;
  }

  input {
    background-color: transparent;
    border: 1px solid rgba(243, 243, 243, 0.5);
    border-radius: 200px;
    width: 101px;
    height: 50px;
    opacity: 0.8;
    margin-right: 8px;
    color: #f3f3f3;
  }
  @media screen and (min-width: 768px) {
    select {
      width: 332px;
      height: 56px;
      opacity: 0.8;
      margin-right: 14px;
    }

    input {
      width: 150px;
      height: 56px;
      margin-right: auto;
    }
  }
  @media screen and (min-width: 1440px) {
    select {
      width: 316px;
    }
  }
`;
