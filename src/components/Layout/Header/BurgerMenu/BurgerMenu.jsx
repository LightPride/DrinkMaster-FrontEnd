import { BurgerContainer, MenuItems } from './BurgerMenu.styled';

import { StyledNavigationLink } from '../../../Navigation/Navigation.styled';

export const BurgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <BurgerContainer>
      {isOpen === false ? (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleMenu}
        >
          <path
            d="M33.25 15.8333H4.75"
            stroke="#F3F3F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.25 9.5H4.75"
            stroke="#F3F3F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.25 22.1667H4.75"
            stroke="#F3F3F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.25 28.5H4.75"
            stroke="#F3F3F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleMenu}
        >
          <path
            d="M28.5 9.5L9.5 28.5"
            stroke="#F3F3F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 9.5L28.5 28.5"
            stroke="#F3F3F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      <MenuItems open={isOpen}>
        <StyledNavigationLink to="/home" onClick={toggleMenu}>
          Home
        </StyledNavigationLink>
        <StyledNavigationLink to="/drinks" onClick={toggleMenu}>
          Drinks
        </StyledNavigationLink>
        <StyledNavigationLink to="/add" onClick={toggleMenu}>
          Add drink
        </StyledNavigationLink>
        <StyledNavigationLink to="/my" onClick={toggleMenu}>
          My drinks
        </StyledNavigationLink>
        <StyledNavigationLink to="/favorites" onClick={toggleMenu}>
          Favorites
        </StyledNavigationLink>
      </MenuItems>
    </BurgerContainer>
  );
};
