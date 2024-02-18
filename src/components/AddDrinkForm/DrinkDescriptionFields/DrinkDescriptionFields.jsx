import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 768px) {
    gap: 32px;
    flex-direction: row;
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
    flex-direction: row;
  }
`;

export const AddImageField = styled.div`
  width: 100%;
  height: 320px;
  background: rgba(22, 31, 55, 0.5);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 320px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;

export const DescrField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const InputsDescrField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 31px;
  @media screen and (min-width: 768px) {
    width: 352px;
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
    width: 393px;
  }
`;

export const DivAlcoholic = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
`;
