import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 375px;
  padding: 0 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 100px;
  }
`;
