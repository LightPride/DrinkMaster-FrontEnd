import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 56px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 64px;
  }
`;
