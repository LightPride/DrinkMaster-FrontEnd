import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border: none;
  background-color: var(--white-color);
  cursor: pointer;
  padding: 14px 40px;
  border-radius: 42px;

  color: rgb(22, 31, 55);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0%;
  text-align: left;

  &.addDrinks {
    max-width: 151px;
    height: 46px;
  }

  &.addDrinks:active {
    border: 1px solid var(--blue-color);
    background-color: var(--dark-blue-color);
    color: var(--white-color);
  }

  @media screen and (min-width: 768px) {
    &.addDrinks {
      padding: 18px 44px;
      max-width: 169px;
      height: 54px;
    }
  }
  @media screen and (min-width: 1440px) {
    &.addDrinks {
      max-width: 160px;
      height: 54px;
    }
    &.addDrinks:hover {
      color: var(--white-color);
      background-color: var(--dark-blue-color);
    }
  }

  &.addRecipe {
    width: 170px;
    color: #161f37;
  }
  &.addRecipe:active {
    border: 2px solid #4070cd80;
  }
  &.addRecipe:hover {
    color: #f3f3f3;
    background-color: #161f37;
  }
  &.addRecipe:disabled {
    background-color: #434d67;
    color: rgba(243, 243, 243, 0.2);
  }

  &.logOut {
    width: 196px;
    color: #161f37;
  }
  &.logOut:hover {
    border: 1px solid rgba(243, 243, 243, 0.2);
    color: #f3f3f3;
    background-color: #161f37;
  }
  &.logOut:disabled {
    border: 1px solid rgba(243, 243, 243, 0.2);
    color: rgba(243, 243, 243, 0.2);
    background-color: #161f37;
  }

  &.addToFavorite {
    width: 251px;
  }
  &.addToFavorite:hover {
    background-color: #161f37;
    color: #f3f3f3;
  }
  &.addToFavorite:disabled {
    background-color: #434d67;
    color: rgba(243, 243, 243, 0.2);
  }

  &.seeRecipe {
    width: 169px;
    background-color: #161f37;
    color: #f3f3f3;
  }
  &.seeRecipe:hover {
    background-color: #f3f3f3;
    color: #161f37;
  }

  &.subscribe {
    width: 309px;
    height: 56px;
    color: #f3f3f3;
    background-color: #0a0a11;
    border-radius: 200px;
    border: 1px solid rgba(243, 243, 243, 0.2);
  }

  &.subscribe:hover {
    background-color: #f3f3f3;
    color: #161f37;
  }
`;
