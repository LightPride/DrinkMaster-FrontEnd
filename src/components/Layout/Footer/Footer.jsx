import {
  FooterContainer,
  FooterSection,
  FooterDivOne,
  FooterDivTwo,
  FooterDivDesk,
  FooterDivTab,
  FooterDivMob,
  FooterDiv,
} from './Footer.styled';

import Subscribe from './Subscriebe/Subscribe';
import Info from './Info/Info';
import Logo from '../../Logo/Logo';
import NavFooter from './NavFooter/NavFooter';
import FollowUs from '../../FollowUs/FollowUs';

export const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterDiv>
          <FooterDivMob>
            <FooterDivTwo>
              <FooterDivOne>
                <Logo />
                <FollowUs />
              </FooterDivOne>
              <NavFooter />
              <FooterDivDesk>
                <Subscribe />
              </FooterDivDesk>
            </FooterDivTwo>
            <FooterDivTab>
              <Subscribe />
            </FooterDivTab>
          </FooterDivMob>
          <Info />
        </FooterDiv>
      </FooterContainer>
    </FooterSection>
  );
};
export default Footer;
