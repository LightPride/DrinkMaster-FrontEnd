import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './components/Layout/SharedLayout/SharedLayout';
import PublicRoute from './routes/PublicRoute';
// import PrivateRoute from './routes/PrivateRoute';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const DrinksPage = lazy(() => import('./pages/DrinksPage/DrinksPage'));
const SignupPage = lazy(() => import('./pages/SignupPage/SignupPage'));
const SigninPage = lazy(() => import('./pages/SigninPage/SigninPage'));
const MyDrinksPage = lazy(() => import('./pages/MyDrinksPage/MyDrinksPage'));
const DrinkPage = lazy(() => import('./pages/DrinkPage/DrinkPage'));
const FavoriteDrinksPage = lazy(() =>
  import('./pages/FavoriteDrinksPage/FavoriteDrinksPage')
);
const AddDrinkPage = lazy(() => import('./pages/AddDrinkPage/AddDrinkPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />} />
      <Route index element={<Navigate to="/welcome" />} />
      <Route path="/welcome" element={<WelcomePage />} />

      <Route
        path="/signup"
        element={<PublicRoute redirectTo="/home" component={<SignupPage />} />}
      />

      <Route
        path="/signin"
        element={<PublicRoute redirectTo="/home" component={<SigninPage />} />}
      />

      <Route
        path="/home"
        element={<PublicRoute redirectTo="/login" component={<HomePage />} />}
      />

      <Route
        path="/add"
        element={
          <PublicRoute redirectTo="/login" component={<AddDrinkPage />} />
        }
      />

      <Route
        path="/favorites"
        element={
          <PublicRoute redirectTo="/login" component={<FavoriteDrinksPage />} />
        }
      />

      <Route
        path="/my"
        element={
          <PublicRoute redirectTo="/login" component={<MyDrinksPage />} />
        }
      />
      <Route
        path="/drinks"
        element={<PublicRoute redirectTo="/login" component={<DrinksPage />} />}
      >
        {' '}
        <Route path="/:drinkId" element={<DrinkPage />} /> <Route />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
export default App;
