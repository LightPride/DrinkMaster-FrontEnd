import TitleForm from '../../components/AuthComponents/TitleForm';
import WelcomeLayout from '../../components/Layout/WelcomeLayout/WelcomeLayout';
import WelcomeDescription from '../../components/AuthComponents/WelcomeDescribtion';
import WelcomeLinks from '../../components/AuthComponents/WelcomeLinks';
import { Container } from '../../components/Layout/Container/Container';

const WelcomePage = () => {
  return (
    <WelcomeLayout>
      <Container>
        <TitleForm margin={'14px'} title={'Welcome to the app!'} />
        <WelcomeDescription />
        <WelcomeLinks />
      </Container>
    </WelcomeLayout>
  );
};

export default WelcomePage;
