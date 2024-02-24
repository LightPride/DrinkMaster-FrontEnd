import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Layout/Header/Header';
import { Footer } from 'components/Layout/Footer/Footer';

import Loader from '../../../ui/Loader';
import { StyledBackground, StyledMain } from './SharedLayout.styled';
import { useSelector } from 'react-redux';

const SharedLayout = () => {
  const { token } = useSelector((state) => state.auth);

  return (
    <>
      <StyledBackground />
      <div className={token ? 'mainBackground' : 'welcomeBackground'}>
        {token && <Header />}
        <StyledMain>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </StyledMain>
        {token && <Footer />}
      </div>
    </>
  );
};

export default SharedLayout;
