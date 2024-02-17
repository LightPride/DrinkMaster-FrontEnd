import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './components/Layout/SharedLayout/SharedLayout';
// import PublicRoute from './routes/PublicRoute';
// import PrivateRoute from './routes/PrivateRoute';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const DrinksPage = lazy(() => import('./pages/DrinksPage/DrinksPage'));
// const SignupPage = lazy(() => import('./pages/SignupPage/SignupPage'));
// const SigninPage = lazy(() => import('./pages/SigninPage/SigninPage'));
// const MyDrinksPage = lazy(() => import('./pages/MyDrinksPage/MyDrinksPage'));
const DrinkPage = lazy(() => import('./pages/DrinkPage/DrinkPage'));
// const FavoriteDrinksPage = lazy(() => import('./pages/FavoriteDrinksPage/FavoriteDrinksPage'));
// const AddDrinkPage = lazy(() => import('./pages/AddDrinkPage/AddDrinkPage'));
// import ingredients from 'data/ingredients.json';
// import recipes from '<data/recipes.json';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="drink" element={<DrinkPage />} />

        {/* <Route
          path="/signup"
          element={
            <PublicRoute redirectTo="/home" component={<SignupPage />} />
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
            <PrivateRoute redirectTo="/login" component={<HomePage />} />
          }
        />

        <Route
          path="/add"
          element={
            <PrivateRoute redirectTo="/login" component={<AddDrinkPage />} />
          }
        />

        <Route
          path="/favorites"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<FavoriteDrinksPage />}
            />
          }
        />

        <Route
          path="/my"
          element={
            <PrivateRoute redirectTo="/login" component={<MyDrinksPage />} />
          }
        /> */
        /* <Route
          path="/drinks"
          element={
            <PrivateRoute redirectTo="/login" component={<DrinksPage />} />
          }
        > <Route path="/:drinkId" element={ <DrinkPage/>} /> <Route/> */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
export default App;
