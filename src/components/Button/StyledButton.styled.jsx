import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: none;
  height: 54px;
  border-radius: 42px;
  background-color: #f3f3f3;
  padding: 18px 44px 18px 44px;
  cursor: pointer;

  font-family: Manrope;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0%;

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
    background-color:#0A0A11;
    border-radius: 200px;
    border: 1px solid rgba(243, 243, 243,0.2);
  }

  &.subscribe:hover {
    background-color: #f3f3f3;
    color: #161f37;
  }
`;
