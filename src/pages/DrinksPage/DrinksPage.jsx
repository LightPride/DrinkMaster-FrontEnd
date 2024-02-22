import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageTitle from '../../components/PageTitle/PageTitle';
import DrinksSearch from '../../components/DrinksSearch/DrinksSearch';
import { Drinks } from '../../components/Drinks/Drinks';
import { Container } from '../../components/Layout/Container/Container';
import { ErrorMessage } from './DrinksPage.styled';
import { Wrapper } from './DrinksPage.styled';

import {
  selectDrinks,
  selectIsLoading,
  selectErrorDrinks,
} from '../../redux/drinks/drinks.selectors';

import { getSearchedDrink } from '../../redux/drinks/drinks.operations';

export default function DrinksPage() {
  const dispatch = useDispatch();
  const drinks = useSelector(selectDrinks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectErrorDrinks);

  const name = '';
  const category = '';
  const ingredient = '';
  const page = 1;
  const size = 9;

  useEffect(() => {
    dispatch(getSearchedDrink({ name, category, ingredient, page, size }));
  }, [dispatch]);

  return (
    <Container>
      <Wrapper>
        <PageTitle title="Drinks" />
        <DrinksSearch />
        {isLoading ? (
          <p>Loading...</p>
        ) : error || drinks.length === 0 ? (
          <ErrorMessage>No cocktails were found for your request</ErrorMessage>
        ) : (
          <Drinks drinks={drinks} />
        )}
      </Wrapper>
    </Container>
  );
}
