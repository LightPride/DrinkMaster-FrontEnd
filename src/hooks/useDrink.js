import { useSelector } from 'react-redux';
import {
  selectDrinkById,
  selectDrinks,
  selectErrorDrinks,
  selectFavoriteDrinks,
  selectIsLoading,
  selectMainPageDrinks,
  selectOwnDrinks,
  selectPopularDrinks,
  selectTotalDrinks,
} from '../redux/drinks/drinks.selectors';

export const useDrink = () => {
  const mainPageDrinks = useSelector(selectMainPageDrinks);
  const isLoading = useSelector(selectIsLoading);
  const drinks = useSelector(selectDrinks);
  const drinkById = useSelector(selectDrinkById);
  const error = useSelector(selectErrorDrinks);
  const total = useSelector(selectTotalDrinks);
  const favoriteDrinks = useSelector(selectFavoriteDrinks);
  const popularDrinks = useSelector(selectPopularDrinks);
  const ownDrinks = useSelector(selectOwnDrinks);

  return {
    mainPageDrinks,
    isLoading,
    drinks,
    drinkById,
    error,
    total,
    favoriteDrinks,
    popularDrinks,
    ownDrinks,
  };
};
