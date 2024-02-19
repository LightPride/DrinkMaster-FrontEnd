import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  border-bottom: 1px solid var(--white-twenty-color);

  @media screen and (min-width: 768px) {
    padding: 23px 32px 32px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 28px;
    padding-bottom: 28px;
    align-items: center;
  }
`;
