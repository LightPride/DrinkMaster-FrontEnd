import styled from 'styled-components';

export const UserLogoWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: baseline;
`;

export const UserLogoBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  padding: 0;
  background-color: transparent;
`;

export const UserLogoText = styled.p`
  color: var(--white-color);
  font-family: 'Manrope-500';
  font-size: 14px;
  line-height: 129%;
  margin-right: 14px;
  transition: color 100ms ease;
  &:hover,
  &:focus {
    color: var(--white-fifty-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
    margin-right: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 0;
  }
`;
