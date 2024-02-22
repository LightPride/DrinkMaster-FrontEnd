import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Layout/Header/Header';
import { Footer } from 'components/Layout/Footer/Footer';

import Loader from '../../../ui/Loader';
import { StyledBackground } from './SharedLayout.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/auth.selectors';

const SharedLayout = () => {
  const authenticated = useSelector((state) => state.auth.authenticated);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <StyledBackground />
      <div className={authenticated ? 'mainBackground' : 'welcomeBackground'}>
        {isLoggedIn && <Header />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        {isLoggedIn && <Footer />}
      </div>
    </>
  );
};

export default SharedLayout;
