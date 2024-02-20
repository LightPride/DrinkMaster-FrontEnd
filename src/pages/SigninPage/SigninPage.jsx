import TitleForm from '../../components/AuthComponents/TitleForm';
import SignInForm from '../../components/AuthComponents/SignInForm';
import RedirectLink from '../../components/AuthComponents/RedirectLink';
import WelcomeLayout from '../../components/Layout/WelcomeLayout/WelcomeLayout';
import { Container } from '../../components/Layout/Container/Container';

const SigninPage = () => {
  return (
    <WelcomeLayout>
      <Container>
        <TitleForm margin={'28px'} title={'Sign In'} />
        <SignInForm />
        <RedirectLink link={'/signup'} title={'Sign Up'} />
      </Container>
    </WelcomeLayout>
  );
};

export default SigninPage;
