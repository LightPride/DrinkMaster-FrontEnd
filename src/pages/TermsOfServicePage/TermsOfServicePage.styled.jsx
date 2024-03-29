import styled from 'styled-components';

export const CommonContainer = styled.section`
  padding-top: 200px;
  padding-bottom: 112px;
`;

export const Title = styled.h1`
  margin-bottom: 40px;
  color: #f3f3f3;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.18;
  @media (min-width: 768px) {
    margin-bottom: 60px;
    font-size: 60px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 62px;
    font-size: 64px;
  }
`;

export const Text = styled.p`
  color: #f3f3f3;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
`;
