import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Layout/Header/Header';
import { Footer } from 'components/Layout/Footer/Footer';

import Loader from '../../../ui/Loader';
import { StyledBackground } from './SharedLayout.styled';
import { useSelector } from 'react-redux';

const SharedLayout = () => {
  const authenticated = useSelector((state) => state.auth.authenticated);
  return (
    <StyledBackground>
      <div className={authenticated ? 'mainBackground' : 'welcomeBackground'}>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Footer />
      </div>
    </StyledBackground>
  );
};

export default SharedLayout;
