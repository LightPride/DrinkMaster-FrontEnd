import { useState, useEffect } from 'react';
import Logo from '../../Logo/Logo';
import Navigation from '../../Navigation/Navigation';
import { HeaderContainer, HeaderWrapper } from './Header.styled';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { Container } from '../Container/Container';

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
      <Container>
        <HeaderWrapper>
          <Logo />
          {windowWidth >= 1440 && <Navigation />}
          {windowWidth < 1440 && (
            <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          )}
        </HeaderWrapper>
      </Container>
    </HeaderContainer>
  );
};
