import { useState, useEffect } from 'react';

import Logo from '../../Logo/Logo';
import UserLogo from './UserLogo/UserLogo';

import Navigation from '../../Navigation/Navigation';
import { HeaderContainer, HeaderWrapper, Div } from './Header.styled';
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
          {windowWidth >= 1440 && (
            <Div>
              <Navigation /> <UserLogo />
            </Div>
          )}

          {windowWidth < 1440 && (
            <Div>
              <UserLogo />
              <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </Div>
          )}
        </HeaderWrapper>
      </Container>
    </HeaderContainer>
  );
};
