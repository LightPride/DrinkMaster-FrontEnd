import { FooterNav, FooterUl } from './NavFooter.styled';
import { FooterLink } from './NavFooter.styled';

export const NavFooter = () => {
  return (
    <nav>
      <FooterUl>
        <FooterNav>
          <FooterLink to="/drinks">Drinks</FooterLink>
        </FooterNav>
        <FooterNav>
          <FooterLink to="/add">Add Drink</FooterLink>
        </FooterNav>
        <FooterNav>
          <FooterLink to="/my">My Drinks</FooterLink>
        </FooterNav>
        <FooterNav>
          <FooterLink to="/favorites">Favorites drinks</FooterLink>
        </FooterNav>
      </FooterUl>
    </nav>
  );
};

export default NavFooter;
