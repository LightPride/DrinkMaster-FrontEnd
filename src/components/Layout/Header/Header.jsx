import { Container } from '../Container/Container';
import Logo from '../../Logo/Logo';
import Navigation from '../../Navigation/Navigation';
import { HeaderContainer } from './Header.styled';

export const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Logo />
        <Navigation />
      </HeaderContainer>
    </Container>
  );
};
