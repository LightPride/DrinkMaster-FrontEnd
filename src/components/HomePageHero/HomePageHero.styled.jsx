import styled from 'styled-components';

export const HomePageHeroWrapper = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: normal;
    justify-content: space-between;
    padding-bottom: 218px;
  }
`;

export const HomePageTextWrapper = styled.div`
  @media screen and (max-width: 767px) {
    padding-top: 80px;
  }
  @media screen and (min-width: 768px) {
    padding-top: 120px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 185px;
    width: 715px;
  }
`;

export const HomePageImageWrapper = styled.div`
  @media screen and (max-width: 767px) {
    margin-top: 47px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 54px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 0px;
    padding-top: 128px;
  }
`;

export const HomePageTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0%;
  color: var(--white-color);
  @media screen and (min-width: 768px) {
    font-size: 56px;
    font-weight: 600;
    line-height: 60px;
    letter-spacing: 0%;
  }

  @media screen and (min-width: 1440px) {
    font-size: 64px;
    font-weight: 600;
    line-height: 68px;
    letter-spacing: 0%;
  }
`;
export const HomePageSubtitle = styled.p`
  @media screen and (max-width: 767px) {
    margin-top: 16px;
    margin-bottom: 32px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0%;
  }
  @media screen and (min-width: 768px) {
    margin-top: 28px;
    margin-bottom: 48px;
    max-width: 600px;

    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0%;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0%;
    margin-top: 28px;
    margin-bottom: 40px;
  }
  color: #f3f3f3;
`;

export const HomePageImage = styled.img`
  width: 252px;
  height: 313px;
  @media screen and (min-width: 768px) {
    width: 359px;
    height: 445px;
  }
`;

export const AddDrinksButton = styled.button`
  border: none;
  background-color: var(--white-color);
  cursor: pointer;
  padding: 14px 40px;
  border-radius: 42px;
  font-family: inherit;
  font: inherit;
  color: rgb(22, 31, 55);
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  border: 1px solid transparent;

  &:active {
    border: 1px solid var(--blue-color);
  }

  &:hover,
  &:focus {
    color: var(--white-color);
    background: var(--dark-blue-color);
  }
  &:disabled {
    background: var(--grey-color);
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
  }
`;
