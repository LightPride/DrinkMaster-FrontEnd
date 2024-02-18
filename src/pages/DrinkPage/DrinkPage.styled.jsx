import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 320px;
  max-width: 375px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 20px;
    padding-right: 20px;
    max-width: 1280px;
  }
`;

export const DrinkPageWrapper = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }
`;
