import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Layout/Header/Header';
import { Footer } from 'components/Layout/Footer/Footer';

import Loader from '../../../ui/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
