import { useSelector } from 'react-redux';
import PageTitle from '../../components/PageTitle/PageTitle';
import DrinksSearch from '../../components/DrinksSearch/DrinksSearch';
import { Drinks } from '../../components/Drinks/Drinks';
import { Container } from '../../components/Layout/Container/Container';
import { ErrorMessage } from './DrinksPage.styled';
import { Wrapper } from './DrinksPage.styled';
import Loader from '../../ui/Loader';

import {
  selectDrinks,
  selectIsLoading,
  selectErrorDrinks,
} from '../../redux/drinks/drinks.selectors';

export default function DrinksPage() {
  const drinks = useSelector(selectDrinks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectErrorDrinks);

  return (
    <Container>
      <Wrapper>
        <PageTitle title="Drinks" />
        <DrinksSearch />
        {isLoading ? (
          <Loader />
        ) : error || drinks.length === 0 ? (
          <ErrorMessage>No cocktails were found for your request</ErrorMessage>
        ) : (
          <Drinks drinks={drinks} />
        )}
      </Wrapper>
    </Container>
  );
}
