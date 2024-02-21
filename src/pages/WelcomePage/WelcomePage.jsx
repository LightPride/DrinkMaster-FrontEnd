import WelcomeLayout from '../../components/Layout/WelcomeLayout/WelcomeLayout';
import WelcomeDescription from '../../components/AuthComponents/WelcomeDescribtion';
import WelcomeLinks from '../../components/AuthComponents/WelcomeLinks';
import { Container } from '../../components/Layout/Container/Container';
import TitleWelcome from '../../components/AuthComponents/TitleWelcome';

const WelcomePage = () => {
  return (
    <WelcomeLayout>
      <Container>
        <TitleWelcome />
        <WelcomeDescription />
        <WelcomeLinks />
      </Container>
    </WelcomeLayout>
  );
};

export default WelcomePage;
