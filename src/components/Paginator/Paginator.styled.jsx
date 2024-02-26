import styled from 'styled-components';

export const WrapperGeneralStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px auto 80px auto;

  max-width: 295px;
  flex-wrap: nowrap;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 140px;
  }

  @media (min-width: 1440px) {
    margin-top: 118px;
    max-width: 436px;
  }
`;
