import styled from 'styled-components';

export const CategoryContainer = styled.div`
  padding-top: 124px;
  display: flex;
  @media screen and (min-width: 1440px) {
    padding-top: unset;
  }
`;

export const CategoryCardList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryWrapper = styled.ul`
  gap: 40px;
`;

export const Category = styled.h2`
  font-weight: 600;
  font-size: 40px;
  width: 100%;
  color: rgb(243, 243, 243);
  margin-bottom: 20px;
`;

export const CardsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: colum;
  gap: 20px;
  margin-bottom: 80px;
`;
