import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './components/Layout/SharedLayout/SharedLayout';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
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
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<WelcomePage />} />
        {/* <Route path="/home" element={<HomePage />} />
        <Route path="/drinks" element={<DrinksPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/my" element={<MyDrinksPage />} />
        <Route path="/drink/:drinkId" element={<DrinkPage />} />
        <Route path="/favorites" element={<FavoriteDrinksPage />} />
        <Route path="/add" element={<AddDrinkPage />} /> */}
        <Route
          path="/signup"
          element={
            <PublicRoute redirectTo="/signin" component={<SignupPage />} />
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute redirectTo="/home" component={<SigninPage />} />
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute redirectTo="/signin" component={<HomePage />} />
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute redirectTo="/signin" component={<AddDrinkPage />} />
          }
        />
        <Route
          path="/favorites"
          element={
            <PrivateRoute
              redirectTo="/signin"
              component={<FavoriteDrinksPage />}
            />
          }
        />
        <Route
          path="/my"
          element={
            <PrivateRoute redirectTo="/signin" component={<MyDrinksPage />} />
          }
        />
        <Route
          path="/drinks"
          element={
            <PrivateRoute redirectTo="/signin" component={<DrinksPage />} />
          }
        />

        <Route
          path="drink/:drinkId"
          element={
            <PrivateRoute redirectTo="/signin" component={<DrinkPage />} />
          }
        />
        {/* <Route path="/:drinkId" element={<DrinkPage />} /> <Route /> */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
export default App;
