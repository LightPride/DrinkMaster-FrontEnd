import styled from 'styled-components';

export const HomePageHeroWrapper = styled.div`
   padding-top: 80px;
  @media screen and (min-width: 768px) {
    padding-top: 120px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 185px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const HomePageTextWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 40px;
    width: 715px;
    height: 458px;
  }
`;

export const HomePageImageWrapper = styled.div``;

export const HomePageTitle = styled.div`
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
export const HomePageSubtitle = styled.p`
  /* padding-right: 124px; */
  padding-bottom: 128px;
  
  color: #f3f3f3;
  font-size: 600;
  line-height:1.6;
  max-width: 500px;
  max-height:76px
`;

export const HomePageImage = styled.img`
  @media screen and (min-width: 1440px) {
    width: 100%;
    width: 359px;
    height: 445px;
  }
`;
