import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--white-twenty-color);

  @media screen and (min-width: 768px) {
    padding-top: 22px;
    padding-bottom: 22px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 22px;
    padding-bottom: 22px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
`;
