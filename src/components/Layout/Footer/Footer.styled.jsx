import { styled } from 'styled-components';

export const FooterContainer = styled.footer`
  margin: 0 auto;
  padding: 40px 20px 18px 20px;
  width: 100%;
  max-width: 375px;

  @media (min-width: 768px) {
    min-width: 768px;
    padding: 80px 32px 24px 32px;
  }

  @media (min-width: 1440px) {
    min-width: 1440px;
    padding: 80px 100px 24px 100px;
  }
`;
export const FooterSection = styled.section`
  margin: 0 auto;
  border-top: 1px solid var(--white-twenty-color);
`;
export const FooterDiv = styled.div`
  display: flex;

  justify-content: flex-start;
  flex-direction: column;
`;

export const FooterDivTwo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;

  @media (min-width: 375px) {
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 40px;
  }

  @media (min-width: 1440px) {
  }
`;

export const FooterDivOne = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 28px;
  }

  @media (min-width: 1440px) {
    gap: 40px;
  }
`;

export const FooterDivDesk = styled.div`
  display: none;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
    display: block;
  }
`;

export const FooterDivTab = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 767px) {
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const FooterDivMob = styled.div`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    display: flex;

    justify-content: flex-start;
    flex-direction: column;
    gap: 40px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
  }
`;
