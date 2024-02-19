import { useState, useEffect } from 'react';
import Logo from '../../Logo/Logo';
import Navigation from '../../Navigation/Navigation';
import { HeaderContainer } from './Header.styled';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo />
      {windowWidth >= 1280 && <Navigation />}
      {windowWidth < 1280 && (
        <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      )}
    </HeaderContainer>
  );
};
