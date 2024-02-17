import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
    gap: 60px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 60px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 80px;
  }
  .test1 {
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 133%;
    color: #f3f3f3;
  }
`;

export const SubTitle = styled.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 133%;
  color: #f3f3f3;
`;
