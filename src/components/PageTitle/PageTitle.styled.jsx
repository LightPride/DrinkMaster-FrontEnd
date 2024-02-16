import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 40px;
  font-weight: 600;
  color: #f3f3f3;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
    font-size: 56px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 80px;
    font-size: 64px;
  }
`;
