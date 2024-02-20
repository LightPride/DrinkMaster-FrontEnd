import SignUpForm from '../../components/AuthComponents/SignUpForm';
import TitleForm from '../../components/AuthComponents/TitleForm';
import RedirectLink from '../../components/AuthComponents/RedirectLink';
import WelcomeLayout from '../../components/Layout/WelcomeLayout/WelcomeLayout';
import { Container } from '../../components/Layout/Container/Container';

const SignupPage = () => {
  return (
    <WelcomeLayout>
      <Container>
        <TitleForm margin={'28px'} title={'Sign Up'} />
        <SignUpForm />
        <RedirectLink link={'/signin'} title={'Sign In'} />
      </Container>
    </WelcomeLayout>
  );
};

export default SignupPage;
