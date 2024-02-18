import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const SubtitleForm = styled.h2`
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14286;
  color: #f3f3f3;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const InputsField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
